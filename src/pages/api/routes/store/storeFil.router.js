import prisma from "lib/db";

async function getAll(req, res) {
  const {category} = req.body;
  
  await prisma.$connect;
  const allItems = await prisma.product.findMany({
    where:{
      category_connection: {
        select: {
          category_ref: { select: { category_name: "Computer Mouse" } },
        },
      },
    },
    include: {
      category_connection: {
        select: {
          category_ref: { select: { category_name: true } },
        },
      },
    },
  });
  console.log("path: ", allItems);
  res.send(allItems);
}

export default getAll;
