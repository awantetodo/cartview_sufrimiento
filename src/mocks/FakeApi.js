import vermu from '../images/items/vermu.png'


const productList = [
    {
        id:'01',
        title:'Vermú de la casa',
        price:350,
        pictureurl:vermu,
        category:'drinks',
        stock:999
    },
    {
        id:'02',
        title:'Tortilla de papa + acomp.',
        price:600,
        pictureurl:vermu,
        category:'foods',
        stock:12
    },
    {
        id:'03',
        title:'Empanada de carne cortada a cutucuchillo',
        price:250,
        pictureurl:vermu,
        category:'foods',
        stock:190
    },
    {
        id:'04',
        title:'Picada veggie',
        price:2400,
        pictureurl:vermu,
        category:'foods',
        stock:11
    },
    {
        id:'05',
        title:'Vinito fresco',
        price:29400,
        pictureurl:vermu,
        category:'drinks',
        stock:10
    },
    {
        id:'06',
        title:'Locro Porción',
        price:27500,
        pictureurl:vermu,
        category:'foods',
        stock:13
    },
    {
        id:'07',
        title:'Fernet c/coca',
        price:3500,
        pictureurl:vermu,
        category:'drinks',
        stock:900
    },
    {
        id:'08',
        title:'Pastel de papa',
        price:27900,
        pictureurl:vermu,
        category:'foods',
        stock:9
    },
    {
        id:'09',
        title:'Jordan Hyper Storm Fleece Gloves',
        price:3100,
        pictureurl:vermu,
        category:'drinks',
        stock:22
    },
    {
        id:'10',
        title:'Lentejas',
        price:3500,
        pictureurl:vermu,
        category:'foods',
        stock:22
    },
    {
        id:'11',
        title:'IPA',
        price:3800,
        pictureurl:vermu,
        category:'drinks',
        stock:20
    },
    {
        id:'12',
        title:'GOLDEN',
        price:6800,
        pictureurl:vermu,
        category:'drinks',
        stock:10
    }
];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productList);
    },2000);
});