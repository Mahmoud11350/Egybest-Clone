export const moiveSearch = (state = [], action) => {
  switch (action.type) {
    case "MOIVE_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export const topMoives = (state = [], action) => {
  switch (action.type) {
    case "TOP_RATED":
      return action.payload;
    default:
      return state;
  }
};

export const latest = (state = [], action) => {
  switch (action.type) {
    case "LATEST":
      return action.payload;
    default:
      return state;
  }
};

export const nowPlaying = (state = [], action) => {
  switch (action.type) {
    case "NOW_PLAYING":
      return action.payload;
    default:
      return state;
  }
};
export const popular = (state = [], action) => {
  switch (action.type) {
    case "POPULAR":
      return action.payload;
    default:
      return state;
  }
};
export const upComing = (state = [], action) => {
  switch (action.type) {
    case "UP_COMING":
      return action.payload;
    default:
      return state;
  }
};

export const trending = (state = [], action) => {
  switch (action.type) {
    case "TREND":
      return action.payload;
    default:
      return state;
  }
};
