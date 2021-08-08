import ImageOne from "../images/img1.jpg";
import ImageTwo from "../images/img2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="Tofu"
          className="h-full mb-20 rounded shadow"
        />
        <div className="center-content">
          <h2 className="mb-2 text-2xl">Tofu Bowl</h2>
          <p className="mb-2">Crispy, delicious and nutritious</p>
          <span>8€</span>
        </div>
      </div>

      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="Tofu"
          className="h-full mb-20 rounded shadow"
        />
        <div className="center-content">
          <h2 className="mb-2 text-2xl">Crispy Tofu</h2>
          <p className="mb-2">Crispy, delicious and nutritious</p>
          <span>10€</span>
        </div>
      </div>
    </>
  );
};

export default Content;
