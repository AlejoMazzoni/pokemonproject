import axios from "../utils/axios";

const getPokemons = async () => {
  const res = await axios.get();
  if (!res) {
    throw new Error("Something went wrong!");
  }
  console.log(res);
  return res;
};

export default getPokemons;
