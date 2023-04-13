import prisma from "lib/db";

import StoreMain from "@/component/StorePage/StoreMain";
import StoreMenu from "@/component/StoreMenu/StoreMenu";
import { useEffect } from "react";
export default function ShopAllPage(props) {
  return (
    <div
      className="top-module"
      style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
    >
      <StoreMenu category={props.category} />
      <StoreMain product={props.products}/>
    </div>
  );
}

export async function getStaticProps() {
  await prisma.$connect;
  const category = await prisma.product_category.findMany({
    select: {
      category_connection: {
        select: {
          product_ref: {
            select: {
              product_name: true,
              id: true,
            },
          },
        },
      },
      category_name: true,
      id: true,
    },
  });

  const allItems = await prisma.product.findMany({
    select: {
      category_connection: {
        select: {
          category_ref: { select: { category_name: true } },
        },
      },
      product_name: true,
      id: true,
      product_price: true,
    },
  });

  console.log(allItems)


  return {
    props: {
      category: category,
      products: allItems
    },
  };
}
