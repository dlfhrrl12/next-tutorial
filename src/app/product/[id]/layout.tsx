export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        {children}
        <h2>Featured product</h2>
      </div>
    </>
  );
}
