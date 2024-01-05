import React, { useState } from 'react';
import { makeRequest } from '../../../fetch/fetch';
import { nichetype } from './nichetype/nichetype';

const Home = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    nichetypeValue:'',
    imageName: null,
    mimeType: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleFileChange = (file) => {
  setFormData({
    ...formData,
    imageName: file,
   
  });
};


  const handleSubmit = async () => {
    try {
      const formDataObject = new FormData();
      formDataObject.append('title', formData.title);
      formDataObject.append('content', formData.content);
       
        formDataObject.append('nichetype', formData.nichetypeValue);
     
      formDataObject.append('imageName', formData.imageName, formData.imageName.name);


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
  <label htmlFor="nichetype">NICHE:</label><br />
  <select
    id="nichetype"
    className="form-control"
    value={formData.nichetypeValue}
    onChange={(e) => handleInputChange('nichetypeValue', e.target.value)}
  >
    <option value="" disabled>Select NICHE</option>
    {nichetype.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
</div>

      <div className="form-group">
        <label htmlFor="postimage" className='postlabel'>Image:</label><br/>
        <input
          type="file"
          placeholder="Heading of post"
          id="postimage"
          className="form-control-image"
          accept='image/*'
          onChange={(e) => handleFileChange(e.target.files[0])}
        />
      </div>

      <button type="button" className="btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
