import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) {
  const { id, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <div className="">
        <h1>
          Review {reviewId} for product {id}
        </h1>
      </div>
    </>
  );
}
