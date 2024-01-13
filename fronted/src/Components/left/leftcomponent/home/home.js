import React, { useState } from 'react';
import { makeRequest } from '../../../fetch/fetch';
import { nichetype1 } from './nichetype/nichetype';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nichetype, setNichetypeValue] = useState('');
  const [image, setImage] = useState(null);
  const [filepath,setfilepath]=useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleNichetypeChange = (event) => {
    setNichetypeValue(event.target.value);
  };
const handleFileChange = (event) => {
  const file = event.target.files[0];
 setfilepath(file.name);
  if (file) {
     
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);

    fr.onload = function () {
      const blob = new Blob([fr.result], { type: file.type });
      setImage(blob);
       console.log('Blob:', blob);
    };
  }
};

const imagety=("imageupload",image,filepath);
  const formDataObject = () => {
    return {
      title: title,
      content: content,
      nichetype: nichetype,
      image:imagety
   
    };
  };

  const handleSubmit = async () => {
    try {
      const formData = formDataObject();

  
      const response = await makeRequest('/api/createpost', 'POST', formData);

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
        <label htmlFor="posttitle">Title:</label><br />
        <input
          type="text"
          placeholder="Heading of post"
          id="posttitle"
          className="form-control"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label><br />
        <textarea
          placeholder="Write the brief description of your post"
          id="content"
          className="form-control"
          style={{ height: '6%' }}
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nichetype">NICHE:</label><br />
        <select
          id="nichetype"
          className="form-control"
          value={nichetype}
          onChange={handleNichetypeChange}
        >
          <option value="" disabled>Select NICHE</option>
          {nichetype1.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postimage" className='postlabel'>Image:</label><br />
        <input
          type="file"
          placeholder="Heading of post"
          id="postimage"
          className="form-control-image"
          accept='image/*'
          onChange={handleFileChange}
        />
      </div>

      <button type="button" className="btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
