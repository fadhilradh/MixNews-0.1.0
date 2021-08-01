let useDummyData = true;
import data from "./articles.json";

export async function fetchNews(category) {
  const baseUrl = "https://newsapi.org/v2/";
  const apiKey = "232feacd8ba04a0f8df9027d16cf7857";

  if (useDummyData) {
    return data.articles;
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
