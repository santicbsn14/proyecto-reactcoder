import products from "../data/data"

function getitems(idCategory){
    return new Promise (resolve => {
        setTimeout(()=>{
            if(idCategory === undefined){
                resolve(products)
            }else{
                resolve(products.filter((item)=> item.category === idCategory))
            }
        },2000)
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