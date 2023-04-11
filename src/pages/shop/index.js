import StoreMain from "@/component/StorePage/StoreMain";
import StoreMenu from "@/component/StoreMenu/StoreMenu";
export default function ShopAllPage(){
    return(
        <div className="top-module" style={{display:'flex', justifyContent: 'center', gap: '1rem'}}>
            <StoreMenu/>
            <StoreMain/>
        </div>
    )
}