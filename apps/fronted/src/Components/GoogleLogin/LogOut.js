import { GoogleLogout } from "react-google-login";

const clientId = process.env.clientId;

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout successful!");
  };

  const onFailure = () => {
    console.log("Logout unsuccessful!");
  };

  return (
    <div className="signOutButton">
      <GoogleLogout
        clientId={clientId} 
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default Logout;
