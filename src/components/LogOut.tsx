import { GoogleLogout } from "react-google-login";

const clientId =
  "720269134461-ts8k3v3hmgev8iqd9a3hdja4fej3hq1e.apps.googleusercontent.com";

function Logout() {
  const onSucces = () => {
    console.log("logout succes");
  };

  return (
    <div className="singinButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSucces}
      />
    </div>
  );
}

export default Logout;
