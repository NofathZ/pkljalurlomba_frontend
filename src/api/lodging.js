import axios from "axios";

export default axios.create({
  baseURL:
    "https://staylo.herokuapp.com/api/",
});