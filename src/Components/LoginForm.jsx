import styles from "./Form.module.css";
import { useContext, useState } from "react";
import { ErrorLogin } from "./ErrorLogin";
import { authUser } from "../requests";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../Contexts/TokenContext";
import { ThemeContext } from "../Contexts/ThemeContext";

const LoginForm = () => {

  const navigate = useNavigate();

  const { setTokenInStorage, getTokenFromStorage } = useContext(TokenContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const { isDark } = useContext(ThemeContext);

  const handleSubmit = async (e) => {

    e.preventDefault();

    //Armazenando o token em uma variavel atraves da chamada da requisição
    const tokenAcess = await authUser(login, password);

    //Cado as credenciais estejam corretas
    if (tokenAcess !== undefined && login.length > 5)
    {
      //Armazenando token no localStorage
      setTokenInStorage({ token: tokenAcess.token });

      setErrorMessage(false);

      return navigate("/home");

    }else
    {
      //Caso as credenciais estejam erradas
      setErrorMessage(true);
    }
  };

  console.log(getTokenFromStorage());


  return (
    <>

      <div
        className={!isDark ? `text-center card container ${styles.card}`
          : `text-center card dark container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
          {errorMessage ? <ErrorLogin /> : ""}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
