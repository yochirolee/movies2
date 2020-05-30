import axios from "axios";

const ApiKey='45bf6592c14a965b33549f4cc7e6c664';
 const API =
  ` https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&sort_by=popularity.desc`;

  const MovieInTheatresUrl="https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
 // `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
  
 const ApiGeneres="https://api.themoviedb.org/3/genre/movie/list?api_key=45bf6592c14a965b33549f4cc7e6c664";
 const ApiFindbyGeneres="https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_adult=false &with_genres="
const ApiSearch="https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&query=";

export const FetchData = async () => {
  const result = await axios.get(API);
  return result.data.results;
};


export const FetchGeneres = async () => {
    const generes = await axios.get(ApiGeneres);
  
    return generes.data.genres;
  };

  export const FetchMoviesInTheatres = async () => {
    const generes = await axios.get(MovieInTheatresUrl);
  
    return generes.data.results;
  };

  
export const FetchMoviesByGeneres = async (id) => {
   
    const finalUrl = ApiFindbyGeneres+id;
    const moviesByGeneres = await axios.get(finalUrl);
    return(moviesByGeneres.data.results);
   
  };

  export const SearchMovie = async (query) => {
   
    const finalUrl = ApiSearch+query;
    const movies = await axios.get(finalUrl);
    console.log(movies);
    return(movies.data.results);
   
  };



  
