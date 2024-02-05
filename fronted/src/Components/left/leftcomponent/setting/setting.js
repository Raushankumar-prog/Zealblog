import Cookies from 'js-cookie';
import './setting.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeRequest } from '../../../fetch/fetch';
import Button from '@mui/material/Button';

const handleSavePost = async () => {
  try {
    const id = Cookies.get('id');
    // Make a request to save the post
        Cookies.remove('id');
        Cookies.remove('usernam');
        Cookies.remove('token');
    const response = await makeRequest(`/api/deleteuser/${id}`, 'DELETE');
    console.log(response);
    // Handle the response or update the UI accordingly
  } catch (error) {
    console.error('Error saving the post:', error.message);
  }
};

const handlelogout = async () => {
  try {
    const id = Cookies.get('id');
    // Make a request to save the post
        Cookies.remove('id');
        Cookies.remove('usernam');
        Cookies.remove('token');
    
  } catch (error) {
    console.error('Error saving the post:', error.message);
  }
};

const Setting = () => {
    return ( <div>
        <LogoutIcon  onClick={() => handleSavePost()} />< button>permanent delete user</button>
        <Button onClick={() => handlelogout()}  >logout</Button>
       
    </div> );
}
 
export default Setting;