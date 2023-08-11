import { Routes, Route } from "react-router-dom";
import {MovieDetails, MovieList, PageNotFound, SearchPage} from '../Pages'

const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path = "/" element = {<MovieList apiPath = "movie/now_playing" title = "Home" />} />
        <Route path = "movie/:id" element = {<MovieDetails />} />
        <Route path = "movies/popular" element = {<MovieList apiPath = "movie/popular" title = "popular"/>} />
        <Route path = "movies/top" element = {<MovieList apiPath = "movie/top_rated" title = "Top Rated"/>} />
        <Route path = "movies/upcoming" element = {<MovieList apiPath = "movie/upcoming" title = "Upcoming"/>} />
        <Route path = "search" element = {<SearchPage apiPath = "search/movie"/>} />
        <Route path = "*" element = {<PageNotFound title = "Page not Found"/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
