import { useGetArticleByIdQuery } from "@/app/articles/articleApiSlice";

export default function articleDetail({ articleId }) {
  const {
    data: article,
    isLoading,
    isError,
  } = useGetArticleByIdQuery(articleId);

  if (isLoading) return <p>Đang tải bài viết ...</p>;
  if (isError || !article) return <p>Không tìm thấy ...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Chi tiết bài viết</h1>
      <p>
        <strong>ID:</strong> {article.id}
      </p>
      <p>
        <strong>Tiêu đề:</strong> {article.title}
      </p>
      <p>
        <strong>User ID:</strong> {article.userId}
      </p>
    </div>
  );
}
