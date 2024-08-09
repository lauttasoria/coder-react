const items = [
    {   id: 1,
        nombre:"Licor Bailey",
        precio:"$ 7000",
        stock: 10,
        categoria: "Licores",
        image: "https://acdn.mitiendanube.com/stores/001/211/660/products/baileys1-bda5aeffc3205b936616050396373558-640-0.webp"
        
    },
    {   id: 2,
        nombre:"Cerveza Santa Fe x6",
        precio:"$ 6900",
        stock: 13,
        categoria: "Cerveza",
        image: "https://flaming.ar/wp-content/uploads/2021/09/404-jpg.webp"
    },
    {   id: 3,
        nombre:"Gin Merle",
        precio: "$ 6800",
        stock: 10,
        categoria:"Gin",
        image: "https://vinologos.com/wp-content/uploads/2024/03/Gin-merle-pink.webp"
    },
    {   id: 4,
        nombre:"Licor Amarula",
        precio:"$ 26000",
        stock: 2,
        categoria:"Licores",
        image : "https://jumboargentina.vtexassets.com/arquivos/ids/824413-800-auto?v=638514813710700000&width=800&height=auto&aspect=true"
    },
    {   id: 5,
        nombre:"Cerveza Brahma x6",
        precio:"$ 6600",
        stock: 1,
        categoria:"Cerveza",
        image: "https://http2.mlstatic.com/D_NQ_NP_603283-MLA49042703075_022022-O.webp"
    },
    {   id: 6,
        nombre:"Gin Aconcagua",
        precio:"$ 12800",
        stock: 1,
        categoria:"Gin",
        image: "https://vinologos.com/wp-content/uploads/2024/03/Aconcagua-blanco.webp"
    },
    {   id: 7,
        nombre:"Licor Sheridan´s",
        precio:"$ 3900",
        stock: 1,
        categoria:"Licores",
        image: "https://acdn.mitiendanube.com/stores/861/458/products/3300791-024f621b9f50ebca5315759213328989-1024-1024.webp"
    },
]


export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 1000);
    })
}

export const getProductById = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id*1))            
        }, 100);
    })
}