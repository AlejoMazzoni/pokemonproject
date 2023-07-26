import axios from "../utils/axios";

const getFromPokeapi = async (url) => {
  try {
    const res = await axios.get(url.replace("https://pokeapi.co/api/v2/", ""));
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default getFromPokeapi;
