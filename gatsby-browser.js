import ReactGA from "react-ga";
let id = "UA-123395923-1";

ReactGA.initialize(id);

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname);
};
