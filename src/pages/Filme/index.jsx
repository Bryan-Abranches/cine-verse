import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./filme.css";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

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
          console.log(response.data);
          setFilme(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          console.log("filme nao encontrado!");
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("component desmontado");
    };
  }, [id, navigate]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@cineverse");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilmes = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilmes) {
      toast.warn("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@cineverse", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

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
          <strong>Avaliação: {filme.vote_average}</strong>

          <div className="area-buttons">
            <button className="button" onClick={salvarFilme}>
              Salvar
            </button>

            <a
              className="button"
              rel="external"
              target="_blank"
              href={`https://youtube.com/results?search_query=${filme.title}`}
            >
              Trailer
            </a>
          </div>
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
