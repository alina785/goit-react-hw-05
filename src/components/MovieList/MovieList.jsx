import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./MovieList.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <NavLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={buildLinkClass}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;