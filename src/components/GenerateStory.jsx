

import  { useState, useEffect, useRef } from 'react';
import './GenerateStory.css';

function GenerateStory() {
  const [pdfFile, setPdfFile] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [length, setLength] = useState('medium');
  const [genre, setGenre] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const storyContainerRef = useRef(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleGenerateStory = async () => {
    if (!pdfFile || !prompt || !genre) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);
    formData.append('prompt', prompt);
    formData.append('length', length);
    formData.append('genre', genre);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/generate', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setStory(result.story);
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error generating story.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(story);
  };

  useEffect(() => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollTop = storyContainerRef.current.scrollHeight;
    }
  }, [story]);

  return (
    <div className="main-container">
      {/* Left-side options bar */}
      <div className="options-container">
        <div>
          <div className="option-label">Main Character:</div>
          <input type="text" placeholder="Enter main character name" />
        </div>
        <div>
          <div className="option-label">Title:</div>
          <input type="text" placeholder="Enter story title" />
        </div>
        <div>
          <div className="option-label">Moral:</div>
          <input type="text" placeholder="Enter moral of the story" />
        </div>
        <div>
          <div className="option-label">Side Characters:</div>
          <input type="text" placeholder="Enter side character names" />
        </div>
        <div>
          <div className="option-label">Story Length:</div>
          <select value={length} onChange={(e) => setLength(e.target.value)}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
        <div>
          <div className="option-label">Genre:</div>
          <input type="text" placeholder="Enter genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
      </div>

      {/* Right-side story output container */}
      <div className="story-output-container">
        <div className="story-output" ref={storyContainerRef}>
          {story ? (
            <>
              <h3>Generated Story</h3>
              <div className="story-output-text">{story}</div>
              <button className="copy-button" onClick={copyToClipboard}>Copy</button>
            </>
          ) : (
            <p>No story generated yet.</p>
          )}
        </div>
      </div>

      {/* Prompt and upload section at the bottom */}
      <div className="prompt-upload-container">
        <textarea
          className="prompt-textarea"
          placeholder="Enter your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <input
          type="file"
          accept=".pdf"
          className="upload-button"
          onChange={handleFileChange}
        />
        <button className="generate-button" onClick={handleGenerateStory} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Story'}
        </button>
      </div>
    </div>
  );
}

export default GenerateStory;
