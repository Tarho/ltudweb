import React from "react";
import "./MainStyle.css";

function Main() {
  return (
    <div className="main-container">
      <p className="blogtitle">Our Blog Start From Here</p>
      <div className="comment">
        <a>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqcFovc4Hi6OPmb0s6MyRS_xXzT7BECHsd-uYXAFi1mxnEHgeTv8W8L9k1RAoMb9X3bk&usqp=CAU" />
          <div className="context">
            <h2>Undified</h2>
            <p>Date post: dd/mm/yyyy.</p>
            <p>
              I stumbled upon this website, and I must say, it's a hidden gem!
              The layout is clean and intuitive, making it a breeze to find
              information. Plus, their customer support team was prompt and
              incredibly helpful when I had a question.
            </p>
          </div>
        </a>
      </div>

      <div className="comment">
        <a>
          <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" />
          <div className="context">
            <h2>Undified</h2>
            <p>Date post: dd/mm/yyyy.</p>
            <p>
              I've been a regular visitor to this website for a while now, and I
              can't get enough of it. The design is modern and eye-catching, and
              I appreciate how they regularly update their content. It's my
              go-to place for staying informed and entertained.
            </p>
          </div>
        </a>
      </div>

      <div className="comment">
        <a>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-astonishes-boy-1129046.png" />
          <div className="context">
            <h2>Undified</h2>
            <p>Date post: dd/mm/yyyy.</p>
            <p>
              I recently shopped on this website, and it was a fantastic
              experience. The checkout process was simple, and I received my
              order faster than expected. The website's design is both visually
              pleasing and functional, which made my online shopping enjoyable.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Main;
