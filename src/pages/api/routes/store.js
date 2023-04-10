import prisma from "lib/db";

async function getAll(req, res) {
    await prisma.$connect;
    const allItems = await prisma.product.findMany();
    console.log('path: ', allItems)
    res.send(allItems)
}

export default getAll;
