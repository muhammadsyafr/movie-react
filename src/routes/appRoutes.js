import { Homepage, About, DetailMovie } from "pages";

const appRoutes = [
  {
    name: "About",
    component: About,
    exact: true,
    path: "/about"
  },
  {
    name: "Movie Detail",
    component: DetailMovie,
    exact: true,
    path: `/movie/:id`
  },
  {
    name: "Movie Detail",
    component: DetailMovie,
    exact: true,
    path: `/movie/`
  },
  {
    name: "Homepage",
    component: Homepage,
    exact: true,
    path: "/"
  }
];

export default appRoutes;
