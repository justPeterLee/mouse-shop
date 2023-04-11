import prisma from "lib/db";

async function getAll(req, res) {
  const {catId} = req.query;
  console.log(catId)

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
      category_id: parseInt(catId),
    },
    select: {
      product_ref: true,
    },
  });
  res.send(allItems);
}

export default getAll;
