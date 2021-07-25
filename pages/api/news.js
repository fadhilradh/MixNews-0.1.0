let useDummyData = true;
import data from "./articles.json";

export async function fetchNews() {
    const apiKey = "232feacd8ba04a0f8df9027d16cf7857";
    const baseUrl = "https://newsapi.org/v2/";

    if (useDummyData) {
        return data.articles;
    } else {
        const { articles } = await fetch(
            `${baseUrl}top-headlines?country=id&category=sports&apiKey=${apiKey}`
        ).then((response) => response.json());
        console.log(articles);
    }
}
