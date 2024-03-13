import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleClickLogin = () => {
    setUser(true);
    navegate("/");
  };
  return (
    <div>
      Login
      <p> {user ? "En linea" : " Offline"}</p>
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
};

export default Login;
