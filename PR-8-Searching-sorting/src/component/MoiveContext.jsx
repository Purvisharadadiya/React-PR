import { createContext, useState, useEffect } from "react";
import { Getstroagedata } from "../services/StroageData";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let data = Getstroagedata();
    setMovies(data);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, search, setSearch }}>
      {children}
    </MovieContext.Provider>
  );
};
