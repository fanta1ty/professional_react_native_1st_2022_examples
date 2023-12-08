import React, {useState} from 'react';
import {IGenre} from './src/@types/IGenre';
import {IMovie} from './src/@types/IMovie';
import Home from './src/views/home/Home';
import {View} from 'react-native';
import Genre from './src/views/genre/Genre';
import Movie from './src/views/movie/Movie';

const PAGES = {
  HOME: 0,
  GENRE: 1,
  MOVIE: 2,
};

const App = () => {
  const [page, setPage] = useState<number>(PAGES.HOME);
  const [genre, setGenre] = useState<IGenre | undefined>(undefined);
  const [movie, setMovie] = useState<IMovie | undefined>(undefined);

  const chooseGenre = (lGenre: IGenre) => {
    setGenre(lGenre);
    setPage(PAGES.GENRE);
  };

  const chooseMovie = (lMovie: IMovie) => {
    setMovie(lMovie);
    setPage(PAGES.MOVIE);
  };

  const backToGenres = () => {
    setMovie(undefined);
    setPage(PAGES.GENRE);
  };

  const backToHome = () => {
    setMovie(undefined);
    setGenre(undefined);
    setPage(PAGES.HOME);
  };

  switch (page) {
    case PAGES.HOME:
      return <Home chooseGenre={chooseGenre} />;
    case PAGES.GENRE:
      return (
        <Genre
          genre={genre}
          backToHome={backToHome}
          chooseMovie={chooseMovie}
        />
      );
    case PAGES.MOVIE:
      return <Movie movie={movie} backToGenre={backToGenres} />;
    default:
      return <View />;
  }
};

export default App;
