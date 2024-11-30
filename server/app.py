
import os
import fitz  # PyMuPDF
import asyncio
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.llms import Ollama
from langchain.prompts import ChatPromptTemplate
from langchain.schema import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain.schema.runnable.config import RunnableConfig
import tempfile

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the LangChain model and prompt
model = Ollama(model="gemma:2b")
prompt_template = ChatPromptTemplate.from_messages([
    ("system", "Generate a story based on the prompt."),
    ("human", "{prompt}")
])
runnable = prompt_template | model | StrOutputParser()

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        print("Error extracting text:", e)
        return ""

# Function to generate story based on extracted PDF text
async def generate_story_from_pdf(pdf_text, prompt, length, genre, main_character, moral, title, plots_and_twists, side_character):
    try:
        max_tokens = {
            'short': 500,
            'medium': 1000,
            'long': 2000
        }.get(length, 1000)  # Default to medium length

        combined_prompt = (
            f"Prompt: {prompt}\n"
            f"Genre: {genre}\n"
            f"Main Character: {main_character}\n"
            f"Moral: {moral}\n"
            f"Title: {title}\n"
            f"Plots and Twists: {plots_and_twists}\n"
            f"Side Character: {side_character}\n\n"
            f"Here is some context from the document:\n{pdf_text}"
        )

        chunks = []
        async for chunk in runnable.astream(
            {"prompt": combined_prompt},
            config=RunnableConfig(callbacks=[], max_tokens=max_tokens)
        ):
            chunks.append(chunk)

        story = ' '.join(chunks)
        return story
    except Exception as e:
        print("Error generating story from PDF:", e)
        return ""

@app.route('/generate', methods=['POST'])
def generate_story():
    try:
        if 'pdfFile' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400

        pdf_file = request.files['pdfFile']

        if pdf_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        prompt = request.form.get('prompt', '')
        length = request.form.get('length', 'medium')
        genre = request.form.get('genre', '')
        main_character = request.form.get('mainCharacter', '')
        moral = request.form.get('moral', '')
        title = request.form.get('title', '')
        plots_and_twists = request.form.get('plotsAndTwists', '')
        side_character = request.form.get('sideCharacter', '')

        # Create a temporary directory to save the uploaded file
        with tempfile.TemporaryDirectory() as tmpdirname:
            pdf_path = os.path.join(tmpdirname, pdf_file.filename)
            pdf_file.save(pdf_path)

            # Extract text from the uploaded PDF
            pdf_text = extract_text_from_pdf(pdf_path)

            # Run the asynchronous LangChain generation function
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
            story = loop.run_until_complete(generate_story_from_pdf(
                pdf_text, prompt, length, genre, main_character, moral, title, plots_and_twists, side_character
            ))

        return jsonify({'story': story})
    
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'Failed to generate story'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
