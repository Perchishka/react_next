"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ProductsPage({searchParams}) {

  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div
      onClick={() => {
        router.replace("/cart");
      }}
    >
      Products
    </div>
  );
}
