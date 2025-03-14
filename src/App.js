import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImage] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImage(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
