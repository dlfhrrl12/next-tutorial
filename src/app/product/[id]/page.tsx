import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 2000);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetailPage({ params }: Props) {
  const id = (await params).id;
  return (
    <>
      <div className="">
        <h1>ProductDetail {id}</h1>
      </div>
    </>
  );
}
