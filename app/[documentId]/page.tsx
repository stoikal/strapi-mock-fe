import Articles from "@/services/articles";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ArticlePage({ params }: any) {
  const { documentId } = await params;

  const article = await Articles.retrieve(documentId);

  if (!article.data) return 404;

  return (
    <div className="">
      <h1 className="mb-6 text-lg font-bold">{article.data.Title}</h1>

      <div dangerouslySetInnerHTML={{ __html: article.data.Content }}></div>
    </div> 
  );
}
