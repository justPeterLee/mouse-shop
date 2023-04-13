import prisma from "lib/db";

import ProductPage from "@/component/Product/index/ProductPage";

export default function products(props){
    return(
        <div>
            <ProductPage/>
        </div>
    )
}

// getStaticProps (created getStaticProps to render data)
export async function getStaticProps(context){
    // declare the id of the product
    const {params} = context;

    // connect to the database
    await prisma.$connect;

    
    return{
        props:{
            test: 'test'
        }
    }
}

// getStaticPaths (created paths from dynamic routes)
export async function getStaticPaths(){
    
    // connect to the database
    await prisma.$connect;


    return {
        paths:[
            {params: {productId: '1'}}
        ],
        fallback: 'blocking'
    }
}