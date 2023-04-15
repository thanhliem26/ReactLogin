import { GoogleLogin } from "react-google-login";

const clientId =
  "720269134461-ts8k3v3hmgev8iqd9a3hdja4fej3hq1e.apps.googleusercontent.com";

function Login() {
  const onSucces = (res: any) => {
    console.log("succes", res);
  };

  const onFailure = (res: any) => {
    console.log("faile", res);
  };
  return (
    <div className="singinButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSucces}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
