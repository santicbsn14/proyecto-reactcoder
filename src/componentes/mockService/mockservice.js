import products from "../data/data";
function getitems(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
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