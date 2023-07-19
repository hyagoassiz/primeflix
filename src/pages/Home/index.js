import React, { useEffect, useState } from "react";
import api from "../../services/api"
import { Link } from "react-router-dom";
import "./home.css"

// movie/now_playing?api_key=fe0d02173085354ad511813639032286

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "fe0d02173085354ad511813639032286",
          language: "pt-BR",
          page: 1
        }
      })

      setFilmes(response.data.results.slice(0, 10))
      setLoading(false)
    }

    loadFilmes()

  }, [])

  if(loading){
    return(
      <div className="Loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="Lista-filmes">

        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>

            </article>
          )
        })}

      </div>
    </div>
  );
}

export default Home;
