import { useContext, useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { getDentistId } from "../requests";
import { TokenContext } from "../Contexts/TokenContext";

const DetailCard = () => {

  const params = useParams();
  const id = params.id;

  const [dentist, setDentist] = useState({});
  const {token} = useContext(TokenContext);


  //Metodo que armazena os dentistas dentro do estado
  const saveDentist = async (id) =>
  {
    setDentist(await getDentistId(id));
  }

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    saveDentist(id);
  }, []);
  
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    
    <>
      <h1>Detalhes sobre {dentist.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentist.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentist.sobrenome}
              </li>
              <li className="list-group-item">Matrícula: {dentist.matricula}</li>
              <li className="list-group-item">
                Usuário: {}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
