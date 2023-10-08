import React from "react";
import "./slideStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function slide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slide">
      <h1>Our Product</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/uqq6a-fHayQxsNQkxB9ZZXag8N7Du5mOEKcScr9yltHqx3RKgCdr9VJHKGO2vY_GUe0" />
          <h2>PUBG</h2>
          <p>
            PUBG is a popular battle royale game where players fight to be the
            last one standing on an island.
          </p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/S3GPwY1-mc5876ZnMk65-VrG3Xlh1R8zgK-Q_LlnbjZ7llyyv0ZGWIlNnBM7LckMMzYy" />
          <h2>League of Legends</h2>
          <p>
            League of Legends is a highly competitive multiplayer online battle
            arena (MOBA) game where teams of champions compete to destroy each
            other's Nexus.
          </p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://play-lh.googleusercontent.com/2YtYwsMXgKqm_BWwqeww-gmpWqIKycpa799oypcctPxaGy6qEvmu5NMbQ6-ICQii6Q" />
          <h2>Homescapes </h2>
          <p>
            Homescapes is a mobile puzzle game where players complete match-3
            levels to renovate a mansion.
          </p>
          <button id="btn"> Install </button>
        </div>
        <div className="card">
          <img src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg" />
          <h2>Facebook</h2>
          <p>
            Facebook is a popular social media platform that allows users to
            connect with friends, share content, and engage in various online
            activities.
          </p>
          <button id="btn"> Install </button>
        </div>
      </Carousel>
    </div>
  );
}

export default slide;
