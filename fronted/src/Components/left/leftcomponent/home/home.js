import React, { useState,useEffect } from 'react';
import './home.css';
import { makeRequest } from '../../../../Service/Fetch/Fetch';
import { nichetype1 } from './nichetype/nichetype';
import Cookies from 'js-cookie';
import { Button, Modal, Paper } from '@mui/material';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nichetype, setNichetype] = useState('');
  const [imageData, setImageData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const id = Cookies.get('id');






  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleNichetypeChange = (event) => {
    setNichetype(event.target.value);
  };

  const handleuploadimage=async()=>{
    try{
        const imageInput = document.querySelector("#postimage");
      const file = imageInput.files[0];
      
      // Upload the image
      const { imageaws, imagedate } = await makeRequest("/api/uploadimage", "GET");
      await fetch(imageaws, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
 
      setImageData(imagedate);
    }catch (error) {
      setModalMessage('Error submitting the form.');
      
    }
  }

  const handleSubmit = async () => {
    try {

      // Submit the form data
      const formDataObject = {
        title: title,
        content: content,
        nichetype: nichetype,
        id: id,
        image: imageData,
      };
      console.log(formDataObject)

      const response = await makeRequest('/api/createpost', 'POST', formDataObject);
      if (response.success) {
        setModalMessage('Post created successfully.');
        setShowModal(true);
      } else {
        setModalMessage('Failed to create post.');
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage('Error submitting the form.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Paper sx={{ marginTop: '10%' }}>
      <div id="form">
        <div className="form-group-1">
          <label htmlFor="posttitle" className='labeltext'>Title:</label><br />
          <input
            type="text"
            placeholder="Heading of post"
            id="posttitle"
            className="form-control"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="form-group-1">
          <label htmlFor="content" className='labeltext'>Content:</label><br />
          <textarea
            placeholder="Write the brief description of your post"
            id="content"
            className="form-control"
            style={{ height: '6%' }}
            value={content}
            onChange={handleContentChange}
          />
        </div>

        <div className="form-group-1">
          <label htmlFor="nichetype" className='labeltext'>NICHE:</label><br />
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

        <div className="form-group-1">
          <label htmlFor="posttitle" className='labeltext'>Image:</label><br />
          <input
            type="file"
            accept="image/*"
            placeholder="choose image"
            id="postimage"
            className="form-control"
          />
        </div>
          <button type="button" className="btn-primary" onClick={handleuploadimage}>
          Upload
        </button>
        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '3%', border: '2px solid #000', borderRadius: '4%', width: '30%' }}>
          <h2 id="modal-modal-title">Message</h2>
          <p id="modal-modal-description">{modalMessage}</p>
          <Button onClick={closeModal} variant='contained'>Close</Button>
        </div>
      </Modal>
    </Paper>
  );
};

export default Home;
