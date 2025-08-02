import Link from "next/link";

interface NewsParams {
  params: {
    articleId: string;
  };
  searchParams: {
    lang?: "en" | "es" | "fr";
  };
}

export default function NewsArticle({ params, searchParams }: NewsParams) {
  const { articleId } = params;
  const { lang = "en" } = searchParams;

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
