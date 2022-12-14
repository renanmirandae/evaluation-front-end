import styles from "./Form.module.css";
import { useState } from "react";
import { ErrorLogin } from "./ErrorLogin";
import { authUser } from "../requests";
import { redirect } from "react-router-dom";

const LoginForm = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

    e.preventDefault();

    //Armazenando o token em uma variavel atraves da chamada da requisição
    const tokenAcess = await authUser(login, password);

    //Cado as credenciais estejam corretas
    if(tokenAcess != undefined)
    {
      //Armazenando token no localStorage
      localStorage.setItem("token", tokenAcess.token);
      setErrorMessage(false);
      console.log("logamos");

      return redirect('home');

    }else
    {
      //Caso as credenciais estejam erradas
      setErrorMessage(true);
    }
  };


  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
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
