import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import "./fav.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@cineverse");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@cineverse", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido com sucesso");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && (
        <span>Você não salvou nenhum filme ainda 😥</span>
      )}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}
                alt={filme.title}
              />

              <span>{filme.title}</span>

              <div>
                <Link className="details" to={`/filme/${filme.id}`}>
                  Ver detalhes
                </Link>
                <button
                  className="button"
                  onClick={() => excluirFilme(filme.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
