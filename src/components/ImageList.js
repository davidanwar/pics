import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const imageRendered = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{imageRendered}</div>;
}

export default ImageList;
