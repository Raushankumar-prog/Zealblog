import { useState } from "react";
import { Paper, Modal, Button } from "@mui/material";
import { makeRequest } from "../../../Service/Fetch/Fetch";
import Cookies from 'js-cookie';

const UserLogin = () => {
    
    
    
    const [UserName, setUserName] = useState('');
      const [Password, setPassword] = useState('');
      const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');



  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = async () => {
    try {
     

      // Submit the form data
      const formDataObject = {
        username: UserName,
        password: Password,
      };

      const response = await makeRequest('/signin', 'POST', formDataObject);

      const token = response.token;
      const usernam = response.user.username;
      const id =response.user.id;
      const image=response.user.image;

      Cookies.set('token', token, { expires: 7, secure: true });
      Cookies.set('usernam', usernam, { expires: 7, secure: true });
      Cookies.set('id', id, { expires: 7, secure: true });
      Cookies.set('image',image,{ expires: 7, secure: true });




      if (response) {
        setModalMessage('User login successfully.');
        setShowModal(true);
      } else {
        setModalMessage('Failed to Login .');
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
 
export default UserLogin;