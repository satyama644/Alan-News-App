import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./styles.css";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div class=" px-8  my-4 grid gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {infoCards.map((infoCard) => (
          <div
            class="rounded-md p-4 shadow-md flex flex-col justify-between"
            style={{ backgroundColor: infoCard.color }}
          >
            <div class="font-semibold text-white">{infoCard.title}</div>
            {infoCard.info ? (
              <div class="py-6 text-gray-100">
                <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                {infoCard.info}
              </div>
            ) : null}
            <div class="text-gray-300">
              Try saying: <br /> <i>{infoCard.text}</i>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div class=" px-8  my-4 grid gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {articles.map((article, i) => (
        <NewsCard article={article} i={i} activeArticle={activeArticle} />
      ))}
    </div>
  );
};

export default NewsCards;
