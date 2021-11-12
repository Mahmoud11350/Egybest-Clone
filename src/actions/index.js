import moives from "../Apis/moives";
export const moiveSearch = (searchTerm) => {
  return async (dispatch) => {
    const response = await moives.get("/search/movie", {
      params: {
        query: searchTerm,
      },
    });

    dispatch({
      type: "MOIVE_SEARCH",
      payload: response.data,
    });
  };
};

export const topRated = () => {
  return async (dispatch) => {
    const response = await moives.get("/movie/top_rated");
    dispatch({
      type: "TOP_RATED",
      payload: response.data,
    });
  };
};

export const latest = () => {
  return async (dispatch) => {
    const response = await moives.get("/movie/latest");
    dispatch({
      type: "LATEST",
      payload: response.data,
    });
  };
};

export const nowPlaying = () => async (dispatch) => {
  const response = await moives.get("/movie/now_playing");
  dispatch({
    type: "NOW_PLAYING",
    payload: response.data,
  });
};

export const popular = (page) => async (dispatch) => {
  const response = await moives.get("/movie/popular", {
    params: {
      page: page,
    },
  });
  dispatch({
    type: "POPULAR",
    payload: response.data,
  });
};

export const upComing = () => async (dispatch) => {
  const response = await moives.get("/movie/upcoming");
  dispatch({
    type: "UP_COMING",
    payload: response.data,
  });
};

export const trending = () => async (dispatch) => {
  const response = await moives.get("/trending/all/week");
  dispatch({
    type: "TREND",
    payload: response.data,
  });
};
