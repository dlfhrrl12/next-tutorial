"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathnaem = usePathname();
  const id = pathnaem.split("/")[2];
  const reviewId = pathnaem.split("/")[4];

  return (
    <>
      <div className="">
        <h2>
          Review {reviewId} not found {id}
        </h2>
      </div>
    </>
  );
}
