import prisma from "lib/db";

async function getAll(req, res) {
  const { category_id } = req.body;

  await prisma.$connect;
  const allItems = await prisma.category_connection.findMany({
    // where:{
    //   category_connection: {
    //     include:{
    //       category_ref: true
    //     }
    //   }
    // },
    // include: {
    //   category_connection: {
    //     select: {
    //       category_ref: { select: { category_name: true } },
    //     },
    //   },
    // },

    where: {
      category_id: category_id,
    },
    select: {
      product_ref: true,
    },
  });
  console.log("path: ", allItems);
  res.send(allItems);
}

export default getAll;
