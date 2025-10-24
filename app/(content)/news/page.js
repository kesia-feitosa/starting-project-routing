import NewsList from "@/components/news-list";
import { getAllNews, getAllNewsAsync } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNewsAsync();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}