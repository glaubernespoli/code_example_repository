import Image from "../types/Image";

const ImageCard = ({ image }: { image: Image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded shadow-lg overflow-hidden mx-auto">
      <img src={image.webformatURL} alt="Random" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-red-600 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="hashtag">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
