export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div className="">
        <h1>ProductDetail {id}</h1>
      </div>
    </>
  );
}
