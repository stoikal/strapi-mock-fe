// import Image from "next/image";

import Articles, { Article } from "@/services/articles";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const articles = await Articles.list();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="mb-6 text-lg font-bold">Articles</h1>

      <div className="flex flex-wrap gap-4">
        {articles.data?.map((item: Article) => (
          <Link key={item.documentId} href={`/${item.documentId}`}>
            <div className="hover:bg-amber-300 hover:text-black">
              <div className="w-60">

                <img alt="cover" src={"http://localhost:1337" + item.Cover.url} />
              </div>
              <span>{item.Title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
