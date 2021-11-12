import { combineReducers } from "redux";
import {
  moiveSearch,
  topMoives,
  latest,
  nowPlaying,
  popular,
  upComing,
  trending,
} from "./MoivesReducers";

export default combineReducers({
  moiveSearch,
  topMoives,
  latest,
  nowPlaying,
  popular,
  upComing,
  trending,
});
