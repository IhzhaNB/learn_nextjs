import {
  // notFound,
  redirect,
} from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // if (parseInt(reviewId) > 100) {
  //   notFound();
  // }
  const isValidReviewId = parseInt(reviewId) < 100;

  if (!isValidReviewId) {
    redirect("/products");
  }

  return (
    <h1>
      Review {reviewId}, product {productId}
    </h1>
  );
}
