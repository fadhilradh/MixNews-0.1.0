let useDummyData = true;
import { sports } from "./sports";
import { health } from "./health";
import { business } from "./business";
import { tech } from "./technology";
import { all } from "./all";
// import home from "./home.json";

export async function fetchNews(category) {
  const baseUrl = "https://newsapi.org/v2/";
  const apiKey = "232feacd8ba04a0f8df9027d16cf7857";

  if (useDummyData) {
    if (category === "technology") return tech.articles;
    if (category === "health") return health.articles;
    if (category === "business") return business.articles;
    if (category === "sports") return sports.articles;
    return all.articles;
  }

  const { articles } = await fetch(
    `${baseUrl}top-headlines?country=id&category=${category}&apiKey=${apiKey}`
  ).then((response) => response.json());
  return articles;
}

export async function fetchNewsByQuery(searchQuery) {
  const baseUrl = "https://newsapi.org/v2/";
  const apiKey = "232feacd8ba04a0f8df9027d16cf7857";

  if (useDummyData) {
    return data.articles;
  }

  const { articles } = await fetch(
    `${baseUrl}everything?q=${searchQuery}&apiKey=${apiKey}`
  ).then((response) => response.json());
  return articles;
}
