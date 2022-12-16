import { useContext } from "react";
import { IsLoggedContext } from "../Contexts/IsLogged";
import { ThemeContext } from "../Contexts/ThemeContext";
import { TokenContext } from "../Contexts/TokenContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const {isDark, chooseTheme} = useContext(ThemeContext);
  const {isLogged} = useContext(IsLoggedContext);
  const { setTokenInStorage, getTokenFromStorage, removeTokenFromStorage } = useContext(TokenContext);

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={isDark ? `navbar navbar-expand-sm navbar-light bg-light`
        : `navbar navbar-expand-sm navbar-dark bg-dark`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>

                <Link className="nav-link" to="/login" onClick={() => getTokenFromStorage ? removeTokenFromStorage() : ""}>{getTokenFromStorage() ? "Logout" : "Login"}</Link>
              </li>
              <li className={`nav-item`}>

                <button
                  className={`btn btn-light${styles.btnStyle
                    }`}
                    onClick={chooseTheme}
                >
                 {!isDark ? <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB6UlEQVRIidWWvW4TQRDHfxuM4hRQJSfHSYX8ACivkJYy5AHSwzvw8R7QIkU0UCNIHL4kY8kpIbKEJbB2zkUMDR/Kn8YnTMjd7toRKH9ppNPdzPxmtXs7AxdNJl578fJ/gGVCs8YvnGcxc4NzsTYQS/Mml7hsohkFNtEUHC3C26HIKvK2gf2yj0ORjaADHJlYDVbZF/Vc9EzIi8MAvBTqxaEJ5aL3XiwmB5rYSwWb2A8VfuYeNxz+BDaBA2AwXVAu7pvomvg6sXe5uHcK8BE4OIHNhsOnFv6HvLhpYlz8RmfY2Iut2HwuFurgUYS/BNuZY3du8FBkl+ADcCWmSGD8E1qrDqtyCl4gNbidAAW4WoNbIacgWHAjAVooGLMAv4//lE1fDNdmALeKh7LcZSue+fKPiBdEHC4TXeB6Iri74tiocgjusYOniVCAJxF5qzXD73T8A1pNR17lFFxxw+EFO8TtuxzshKBRYIDMsSvYBsYVbscOtpYdj2NylmooMhPPcvGgePdZrJi4a6Jj4svEOibufBLLhZ8XD020k1vqqbb4PLVoEy+S+/lALBXQ8xoEosaoXKyZ+J6LXhXUxBsvXlXBJ5PMt7K56y+NxHpf1Kt8YsbbvqiPxHoUNFYXdq6uzRHbZv5m8u/1C9EQSIO3DuYlAAAAAElFTkSuQmCC" width="20px"/> : <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAELElEQVRoge2aTUhUURTHf2NZ6WigfWwCE7JFH5ALjYKIVhWEidWiIiJwURD0tWghSLlvU6sWQYFCrYMC+8CyJKzoQygqIyv7MI2ILMyspsU5tzsOb96893y+N0F/kDtz77kz/zP33nPO/T/hP/ILiYi+5wqwEvgAvAIeAneBS8BgRBxCwVUg5fD3C+gCGoFkbOx8oACoBzpwdigFfAKagJKYOPrGOuAFQv430A68xTr0DmiIjZ1PJIHTCPERYDOwHejDOtQKFMdF0A8SwFFkVUaA1YiDx4AxxJmHQEVcBP2iGXtGDOkVwID2vwSq4qHmDwmgDSHdiQQGgErgkfa/BubFws4nirHnozGtvwzo0f77/CMhug4h/J7xhCu0LwWcioFXIJg8szujfznwXcfqoyYVBFuw0SoTLTrWBxRFSSoICrHbaGHG2AygV8cOR8wrEEwEO+AwthGb/WdESSoIdmMzeyYKsKuyM0pSQVCDEH2QZfygjrdHxigg5iNEB7KMlyElzE99nbcoQhz57mJzh4xQXJDdNjb89mBzTdtVpiMfHZmp7bCLTZe2i0xHPjpSqe0bF5t+bf9WxfnoyBJtn7jYfNR2lunIR0fWaHvLxWZI21KnwXbgMvE6V4hIRilgsYvddFwi21firy5NCdKTw2622g05DRployNUav5wUznsz2G3RO0cz9E1rIKxLkx2HmEuVoPkvgk2qO1505F+HtJrm5MePixMlALH9XUL8C2H/TJtHVdkB+OVv9NEpw2f1e+8DUzxYH9d7eucBuciWqxRAFOI7jTZMDe/z8ACD/blwChSOM7MZtSFLZFHEIeambyVMU78ANZ7nLNH51x0M2pUo7eIjDmi79sIV74sxW6nH8BWj/MSwD2dt83NMIkofilEi12d9r6PLHvSJ+qwof4z3lcCYIPO60eSoiuasMSTiK7UiQ0CHYjaUeiDQCGS7EyeMAfby5kwmIqoKylgn5cJJcjlPoUIyiBhuhGrcJgbXBtyx65FHC4GpiGZtxbYBZzBlh0mT+zFW3RKxyGd/xQPq2FgEs4YIigbJJW4+WX8/PUgGTtIfqrGnte1fie3Yn/5SofxKkSyaUV02QH9slGkzL4PnEO2gVsBmAtzsMrJiSAfkMT+8o+J56JfAnQrh258bKlMVCDPJ8zWiPKhyxysE8+QhD0hVCHPJ4xSvnyiH+gB1djt9AznrR0I85A9by4zLUyOZDkViU7mYHcTwkpkIok8nzBRqBfJDWHcKBNIskuPhieYwJnwgnrGP33tRWTMIMGgHKmdTNlhtpLvEBsURYi0n54gx5BsfQzJQzWMT5KzgKXAJuAIUoqPps3vR0L1pK5CNkxHVPF2RIv1myTHgAtIATghB8Isz8uQInMVogAuQA6q+ZeMYaQ8eY7c7G4gq/IlRA7/kTf4A75BRcA+WZMBAAAAAElFTkSuQmCC" width="20px"/>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
