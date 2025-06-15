import Articles from "@/services/articles";
export default async function ArticlePage({ params }: { params: { documentId: string}}) {
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
