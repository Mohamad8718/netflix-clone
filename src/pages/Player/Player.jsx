import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTQzMmI1OTAxNjZiNWZkMjMzZTI3NWY4ZTY1OGExNiIsIm5iZiI6MTc5MTU5NzY4OC41NjcwMDAyLCJzdWIiOiI2YWM5OWM3ODJmNDg2MzIwOWZkZTMyZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.e6aa5LxhEy1M5YqYMUYyw8zIqD57fQkM3cS06SagHDA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        className="player__img"
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="player__iframe"
      ></iframe>
      <div className="player-info">
        <p className="player-info__para">{apiData.published_at.slice(0, 10)}</p>
        <p className="player-info__para">{apiData.name}</p>
        <p className="player-info__para">{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
