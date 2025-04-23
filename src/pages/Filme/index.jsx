import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./filme.css";

function Filme() {
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "910cf3b81a72339757bdcda26eddcf76",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {});
    }

    loadFilme();

    return () => {
      console.log("component desmontado");
    };
  }, []);

  if (loading) {
    return (
      <div className="loading container">
        <h2>Carregando Detalhes...</h2>
      </div>
    );
  }

  return (
    <div
      className="filme-info container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // importante pra overlay funcionar
      }}
    >
      {/* overlay escuro */}
      <div className="overlay-dark"></div>

      <div className="conteudo-filme">
        <div>
          <h1>{filme.title}</h1>
          <h3>Sinopse</h3>
          <span>{filme.overview}</span>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
          alt={filme.title}
        />
      </div>
    </div>
  );
}

export default Filme;
