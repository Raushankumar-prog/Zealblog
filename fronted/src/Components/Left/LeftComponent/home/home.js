import React, { useState, useEffect } from 'react';
import './home.css';
import { makeRequest } from '../../../../Service/Fetch/Fetch';
import { nichetype1 } from './nichetype/nichetype';
import Cookies from 'js-cookie';
import { Button, Modal, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginSignupModal, { checkUser } from '../../../Ui/checklogin';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nichetype, setNichetype] = useState('');
  const [imageData, setImageData] = useState('');
  const [videoData, setVideoData] = useState('');
  const [txtData, setTxtData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const id = Cookies.get('id');
  const [showModol, setShowModol] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    try {
      checkUser(id, setShowModol);
    } catch (error) {
      console.error(error.message);
    }
  }, [id]);

  const handleClose = () => {
    setShowModol(false);
    navigate('/'); 
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleNichetypeChange = (event) => {
    setNichetype(event.target.value);
  };

  const handleUploadImage = async () => {
    try {
      const imageInput = document.querySelector("#postimage");
      const file = imageInput.files[0];
      const { imageaws, imagedate } = await makeRequest("/api/uploadimage", "GET");
      await fetch(imageaws, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setImageData(imagedate);
    } catch (error) {
      setModalMessage('Error submitting the form.');
      setShowModal(true);
    }
  };

  const handleUploadVideo = async () => {
    try {
      const videoInput = document.querySelector("#postvideo");
      const file = videoInput.files[0];
      const { videoaws, videodate } = await makeRequest("/api/uploadvideo", "GET");
      await fetch(videoaws, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setVideoData(videodate);
    } catch (error) {
      setModalMessage('Error submitting the form.');
      setShowModal(true);
    }
  };

  const handleUploadTxt = async () => {
    try {
      const txtInput = document.querySelector("#posttxt");
      const file = txtInput.files[0];
      const { txtaws, txtdate } = await makeRequest("/api/uploadtxt", "GET");
      await fetch(txtaws, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setTxtData(txtdate);
    } catch (error) {
      setModalMessage('Error submitting the form.');
      setShowModal(true);
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataObject = {
        title: title,
        content: content,
        nichetype: nichetype,
        id: id,
        image: imageData,
        video: videoData,
        text: txtData,
      };
      const response = await makeRequest('/api/createpost', 'POST', formDataObject);
      if (response.success) {
        setModalMessage('Post created successfully.');
      } else {
        setModalMessage('Failed to create post.');
      }
      setShowModal(true);
    } catch (error) {
      setModalMessage('Error submitting the form.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/'); // Redirect to the home page
  };

  return (
    <>
      <LoginSignupModal open={showModol} handleClose={handleClose} />
      <Paper sx={{ marginTop: '10%', marginLeft: '23%' }}>
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

          <div className="form-group-2">
            <div>
              <label htmlFor="posttitle" className='labeltext'>Image:</label><br />
              <input
                type="file"
                accept="image/*"
                placeholder="choose image"
                id="postimage"
                className="form-control"
              />
            </div>
            <div className='upbtn'>
              <button type="button" className="btn-primary" onClick={handleUploadImage}>
                Upload
              </button>
            </div>
          </div>

          <div className="form-group-2">
            <div>
              <label htmlFor="posttitle" className='labeltext'>Video:</label><br />
              <input
                type="file"
                accept="video/*"
                placeholder="choose image"
                id="postvideo"
                className="form-control"
              />
            </div>
            <div className='upbtn'>
              <button type="button" className="btn-primary" onClick={handleUploadVideo}>
                Upload
              </button>
            </div>
          </div>

          <div className="form-group-2">
            <div>
              <label htmlFor="posttitle" className='labeltext'>Text:</label><br />
              <input
                type="file"
                accept=".html"
                placeholder="choose image"
                id="posttxt"
                className="form-control"
              />
            </div>
            <div className='upbtn'>
              <button type="button" className="btn-primary" onClick={handleUploadTxt}>
                Upload
              </button>
            </div>
          </div>

          <button type="button" className="btn-primary-1" onClick={handleSubmit}>
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
    </>
  );
};

export default Home;
