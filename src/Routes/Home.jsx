import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { getDentist } from "../requests.js";

const Home = () => {

  //Estado para armazenar os dentistas que são obtidos pela API.
  const [dentists, setDentists] = useState([]);

  //Metodo que armazena os dentistas dentro do estado
  const saveDentists = async () =>
  {
    setDentists(await getDentist());
  }

   useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    saveDentists();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">

        {dentists.map(
          dentist =>
          {
            return(
              <Card key={dentist.matricula} name={`${dentist.nome}  ${dentist.sobrenome}`} registration={dentist.matricula}/>
            );
          }
        )}
      </div>
    </>
  );
};

export default Home;
