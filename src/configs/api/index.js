import baseUrl from "./url";
import ApiRequest from "./config";

const API = {};

API.getMovies = ApiRequest.get(baseUrl.movie.discover)

export default API;
