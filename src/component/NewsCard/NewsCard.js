import React, { useState, useEffect, createRef } from "react";
import "./NewsCard.styles.css";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  //Scroll
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[i]}
      className={
        activeArticle === i
          ? "activeCard"
          : null + "box-border rounded-md shadow-md bg-text overflow-none "
      }
    >
      <div>
        <img
          className="w-full h-60 rounded-t-md"
          src={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
      </div>
      <div class="p-2 ">
        <div class="flex justify-between ">
          <h2 class="font-medium text-gray-300">
            {new Date(publishedAt).toDateString()}
          </h2>
          <h2 class="font-medium  text-gray-300">{source.name}</h2>
        </div>
        <div>
          <h1 class="text-lg py-4 h-40 font-semibold text-gray-200">{title}</h1>
        </div>
        {/* <div class="overflow-ellipsis">{description}</div> */}
        <div class="flex py-2  justify-between">
          <a
            target="_blank"
            href={url}
            class=" text-button font-bold text-lg hover:text-buttonLight"
          >
            Learn More
          </a>
          <h2 class=" text-button font-bold">{i + 1}</h2>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
