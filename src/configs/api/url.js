import appConfig from "../appConfig";

export const config = appConfig;

const baseUrl = {
  movie: {
    base    : `${config.url.api}`,
    discover: `${config.url.api}discover/movie/${config.url.key}`,
  }
};

export default baseUrl;
