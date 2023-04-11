import prisma from "lib/db";

async function getAll(req, res) {
  await prisma.$connect;
  const allItems = await prisma.product.findMany({
    include: {
      category_connection: {
        select: {
          category_ref: { select: { category_name: true } },
        },
      },
    },
  });
  res.send(allItems);
}

export default getAll;
