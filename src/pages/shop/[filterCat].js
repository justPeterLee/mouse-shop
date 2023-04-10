import StoreMain from "@/component/StorePage/StoreMain";
import StoreMenu from "@/component/StoreMenu/StoreMenu";
export default function ShopAllPage(){
    return(
        <div className="top-module" styles={{display:'flex', justifyContent: 'center', gap: '2rem'}}>
            <StoreMenu/>
            <StoreMain />
        </div>
    )
}