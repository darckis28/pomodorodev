import axios from "axios";

const API_KEY = "BYyBvswHtOkiTON4lnhwu5t8nPI0SotxFWfSp5fLgIhACDvMX3ffP58V";
const API_URL = "https://api.pexels.com/v1/search";

export async function getImages({ query }) {
  const res = await axios.get(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
    },
  });
  return res.data.photos[0].src.tiny;
}
