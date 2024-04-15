import { useState } from "react";



const Userform = () => {
    
    
    
    const [UserName, setUserName] = useState('');
      const [Password, setPassword] = useState('');
      const [imageData, setImageData] = useState('');
      const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');



  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNichetypeChange = (event) => {
    setNichetype(event.target.value);
  };


  const handleSubmit = async () => {
    try {
      const imageInput = document.querySelector("#postimage");
      const file = imageInput.files[0];
      
      // Upload the image
      const { imageaws, imagedate } = await makeRequest("/api/uploadimage", "GET");
      setImageData(imagedate);

      

      await fetch(imageaws, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      // Submit the form data
      const formDataObject = {
        username: UserName,
        password: Password,
      
      
        image: imageData,
      };

      const response = await makeRequest('/createuser', 'POST', formDataObject);
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
        <div className="userform">
             <Paper sx={{ marginTop: '10%' }}>
      <div id="form">
        <div className="form-group-1">
          <label htmlFor="posttitle" className='labeltext'>UserName:</label><br />
          <input
            type="text"
            placeholder="Heading of post"
            id="username"
            className="form-control"
            value={UserName}
            onChange={handleUserNameChange}
          />
        </div>

        <div className="form-group-1">
          <label htmlFor="content" className='labeltext'>Password:</label><br />
          <textarea
            placeholder="Write the brief description of your post"
            id="content"
            className="form-control"
            style={{ height: '6%' }}
            value={Password}
            onChange={handlePasswordChange}
          />
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

        </div>
      );
}
 
export default Userform;