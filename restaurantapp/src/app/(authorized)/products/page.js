"use client";
import { useRouter } from "next/router";

export default function ProductsPage() {
  const router = useRouter();
  return (
    <div
      onclick={() => {
        router.push("/cart");
      }}
    >
      Products
    </div>
  );
}
