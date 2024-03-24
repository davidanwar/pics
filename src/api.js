import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4QniD-Z1a8K9-dC0_FYGWaoLK2bc0dV9XUceAWAc7g4",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
