import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import LoginForm from "./Components/LoginForm";
import App from "./App";
import TokenContextProvider from "./Contexts/TokenContext";
import ThemeContextProvider from "./Contexts/ThemeContext";
import IsLoggedContextProvider from "./Contexts/IsLogged";
const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <TokenContextProvider>
      <ThemeContextProvider>
        <IsLoggedContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />}>
                <Route path='home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='detail' element={<Detail />} />
                <Route path='dentist/:id' element={<Detail />} />
                <Route path='login' element={<LoginForm />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </IsLoggedContextProvider>
      </ThemeContextProvider>
    </TokenContextProvider>

  </React.StrictMode>
);
