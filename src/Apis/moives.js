import axios from "axios";

const moives = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f633c358bfe6fafd2f9af124221560ab",
  },
});

export default moives;
