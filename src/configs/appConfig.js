const activeConfig = "dev";

const constants = {
  dev: {
    url: {
      api: "https://api.themoviedb.org/3/",
      key: "?api_key=bfbb7c532fa7e55810b4abaf9cfb07cc",
      assets: "",
      origin: ""
    }
  },

  production: {
    url: {
      api: "",
      assets: "",
      origin: ""
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
