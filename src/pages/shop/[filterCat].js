import StoreMenu from "@/component/StoreMenu/StoreMenu";
import StoreFilter from "@/component/StorePage/StoreFilter/StoreFilter";
import { useRouter } from "next/router";
export default function ShopAllPage(){
    const router = useRouter();
    const catIdURL = router.query.filterCat
    return(

        <div className="top-module" style={{display:'flex', justifyContent: 'center', gap: '2rem'}}>
            <StoreMenu/>
            {
                catIdURL === "computer-mouse" ? <StoreFilter catId={1}/> : 
                catIdURL === "keyboard" ? <StoreFilter catId={2}/> :
                <p>no category found</p>
            }

        </div>
    )
}