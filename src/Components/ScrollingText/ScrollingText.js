import React from "react";
import "./ScrollingText.css";

const ScrollingText = ({ episode }) => {
  return (
    <div className="body">
      <section className="scrolling-Text">
        <div className="crawl">
          <div className="scrollingText--Episode-info">
            <h1>
              Episode {episode.episode_id} {episode.title}
            </h1>
          </div>
          <h1>{episode.opening_crawl}</h1>
        </div>
      </section>
    </div>
  );
};

export default ScrollingText;
