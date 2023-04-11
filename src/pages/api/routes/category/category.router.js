import prisma from "lib/db";

export default async function getCategory(req, res){
    await prisma.$connect;
    const allCat = await prisma.product_category.findMany({
        include:{
            category_connection:{
                select:{
                    product_ref:{
                        select:{
                            product_name:true
                        }
                    }
                }
            }
        }
    })
    console.log(allCat)
    res.send(allCat)
}