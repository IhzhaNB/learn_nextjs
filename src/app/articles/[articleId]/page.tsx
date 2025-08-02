// params & searchParams menggunakan Client Component menggunakan (use) dari hook react
// walaupun Next.js versi terbaru bisa tanpa Promise pada params dan useParams
import Link from "next/link";
import { use } from "react";

interface NewsParams {
  params: Promise<{
    articleId: string;
  }>;
  searchParams: Promise<{
    lang?: "en" | "es" | "fr";
  }>;
}

export default function NewsArticle({ params, searchParams }: NewsParams) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Frenc</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spain</Link>
      </div>
    </div>
  );
}
