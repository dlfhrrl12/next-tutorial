import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <div className="">
        ProductList
        <Link href={"/product/1"}>product1</Link>
        <Link href={"/product/2"}>product1</Link>
        <Link href={"/product/3"}>product2</Link>
        <Link href={"/product/4"}>product3</Link>
      </div>
    </>
  );
}
