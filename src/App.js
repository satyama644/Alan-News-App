import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./component/NewsCards/NewsCards";
import "./App.css";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "6bf5ca955a24a811060f48dad65343292e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          console.log(number);
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div class="container bg-own min-h-full, w-full">
      <div class="py-10 flex flex-col items-center justify-center ">
        <img
          class=" h-40 w-80 rounded-lg shadow-md "
          // src="https://media.istockphoto.com/photos/illustration-wireframe-human-ai-system-and-infographic-information-picture-id1271150287"
          src="https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg"
          alt=""
        />
        <h2 class="text-white font-bold text-2xl pt-3">Alan AI News App</h2>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
