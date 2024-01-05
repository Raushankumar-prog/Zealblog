import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeRequest } from '../../../fetch/fetch';
import { nichetype } from './nichetype/nichetype';


const Home = () => {
  // Change 1: Include 'buffer' for file uploads
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    nichetypeValue: '',
    buffer: null,
    mimeType:'' 
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Change 2: New function to handle file changes
  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      buffer: file, // Changed from 'imageFile' to 'buffer'
      mimeType:file.type,
    });
  };

  const handleSubmit = async () => {
    try {
     const formDataObject = new FormData();
formDataObject.append('title', formData.title);
formDataObject.append('content', formData.content);
formDataObject.append('nichetype', formData.nichetypeValue); // Add this line
formDataObject.append('buffer', formData.buffer);

      const response = await makeRequest('/api/createpost', 'POST', formDataObject);

      if (response.success) {
        console.log('Post created successfully:', response.post);
      } else {
        console.error('Failed to create post:', response.error);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div id="form">
      <div className="form-group">
        <label htmlFor="posttitle">Title:</label><br/>
        <input
          type="text"
          placeholder="Heading of post"
          id="posttitle"
          className="form-control"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label><br/>
        <textarea
          placeholder="Write the brief description of your post"
          id="content"
          className="form-control"
          style={{ height: '6%' }}
          value={formData.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
        />
      </div>
      <div className="form-group">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={nichetype}
          sx={{ width: '30%' }}
          renderInput={(params) => <TextField {...params} label="NICHE" />}
          value={formData.nichetypeValue}
          onChange={(_, newValue) => handleInputChange('nichetypeValue', newValue)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postimage" className='postlabel'>Image:</label><br/>
        <input
          type="file"
          placeholder="Heading of post"
          id="postimage"
          className="form-control-image"
          accept='image/*'
          onChange={(e) => handleFileChange(e.target.files[0])} // Changed from 'imageFile' to 'buffer'
        />
      </div>
      <div className="form-group">
        <label htmlFor="fileuploaded" className='postlabel'>File:</label><br/>
        <input
          type="file"
          placeholder="Heading of post"
          id="fileuploaded"
          className="form-control-image"
          accept='.txt'
          onChange={(e) => handleFileChange(e.target.files[0])} // Changed from 'textFile' to 'buffer'
        />
        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
