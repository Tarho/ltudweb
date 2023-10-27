import React from "react";
import Slider from "react-slick";
import "./slideStyle.css";
import "./slick.css";
import "./slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function slide() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow previous" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="blogproduct">
        <h2>Our Product</h2>
      </div>
      <Slider {...settings}>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/HZ16nsxrSsoJoZx0JDJjpmRN2KC0eZRSTyS2O-Lgjw7BgjTU6W8uDSYNj1IMlbqmtQ" />
          <h2>Pokemon Go</h2>
          <p>Stragety</p>
          <p>
            4.3 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>1.1 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/sieZ2xKcpFG3dXsQNrdpWhWVTcYoEFxD2rPztlkOqCe5FoKI_19-LhLeEZp4lVhRkKI" />
          <h2>Game of War</h2>
          <p>Stragety</p>
          <p>
            5.0 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>0.9 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm" />
          <h2>Clash of Clans</h2>
          <p>Stragety</p>
          <p>
            4.0 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>1.2 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://dl.memuplay.com/new_market/img/com.king.candycrushsaga.icon.2023-09-29-01-23-12.png" />
          <h2>Candy Crush</h2>
          <p>Entertainment</p>
          <p>
            4.5 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>1.3 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/2YtYwsMXgKqm_BWwqeww-gmpWqIKycpa799oypcctPxaGy6qEvmu5NMbQ6-ICQii6Q" />
          <h2>Homescapes</h2>
          <p>Entertainment</p>
          <p>
            4.7 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>2.3 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/uqq6a-fHayQxsNQkxB9ZZXag8N7Du5mOEKcScr9yltHqx3RKgCdr9VJHKGO2vY_GUe0" />
          <h2>PUBG</h2>
          <p>Action</p>
          <p>
            5.0 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>3.3 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/S3GPwY1-mc5876ZnMk65-VrG3Xlh1R8zgK-Q_LlnbjZ7llyyv0ZGWIlNnBM7LckMMzYy" />
          <h2>Garena</h2>
          <p>Action</p>
          <p>
            5.0 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>4.0 GB</p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://o.qoo-img.com/ggpht/wco3UbpLy6Krp1_TgGUtPeTxiyvS3kLbDg5qy-0b4_capKNgvCu0igGaSnji7GCfhAM" />
          <h2>Dokkan Battle</h2>
          <p>Action</p>
          <p>
            4.0 <i class="fa-solid fa-star fa-2xs"></i>
          </p>
          <p>1.5 GB</p>
          <button id="btn"> Install </button>
        </div>
      </Slider>
    </div>
  );
}

export default slide;
