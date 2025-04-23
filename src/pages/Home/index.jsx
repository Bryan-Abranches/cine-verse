import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [dataHoje, setDataHoje] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "910cf3b81a72339757bdcda26eddcf76",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 12));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  useEffect(() => {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
    const ano = hoje.getFullYear();

    setDataHoje(`${dia}/${mes}/${ano}`);
  }, []);

  if (loading) {
    return (
      <div className="loading container">
        <h2>Carregando Filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>
        Em Cartaz - <strong>Dia: {dataHoje}</strong>{" "}
      </h3>
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
