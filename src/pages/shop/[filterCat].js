import StoreMenu from "@/component/StoreMenu/StoreMenu";
import StoreMain from "@/component/StorePage/StoreMain";
import { useRouter } from "next/router";

export default function ShopAllPage(props) {
  const router = useRouter();

  return (
    <div
      className="top-module"
      style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
    >
      <StoreMenu category={props.category} />
      <StoreMain product={props.products} isFilter={false} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params.filterCat);
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

  const allItems = await prisma.category_connection.findMany({
    where: {
      category_id: parseInt(params.filterCat),
    },
    select: {
      product_ref: {
        select: {
          product_name: true,
          id: true,
          product_price: true,
        },
      },
    },
  });

  console.log(allItems);

  return {
    props: {
      category: category,
      products: allItems,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { filterCat: "1" } }],
    fallback: "blocking",
  };
}
