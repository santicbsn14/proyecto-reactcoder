import products from "../data/data";
function getitems(idCategory){
    return new Promise((resolve)=>{
        if(idCategory=== undefined){
        setTimeout(() => {
            resolve(products)
        }, 2000);
    }
    else{
        setTimeout(() => {
            let productofiltrado = products.find((item)=>item.category === (idCategory))
            resolve(productofiltrado)
        }, 2000);
    }
    });
}
export function getSingleItem(idparam){
    return new Promise((resolve)=>{
        let itemAbuscar = products.find((item)=>item.id === parseInt(idparam))
        setTimeout(()=>{
            resolve(itemAbuscar);
        }, 2000);
    });
}
export default getitems