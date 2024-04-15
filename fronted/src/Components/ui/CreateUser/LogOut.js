import Cookies from 'js-cookie';
import './CreateUser.css';
const Logout = () => {

    const logoutFunction = () => {
        Cookies.remove('token');
        Cookies.remove('usernam');
        Cookies.remove('id');
        Cookies.remove('image');
    }

    return (
        <div>
            <button onClick={logoutFunction} className="btn-primary1">LogOut</button>
        </div>
    );
}

export default Logout;
