const products = [
  {
    id: 1,
    name: "Ropa Interior Hombre",
    category: "hombres",
    price: 3000,
    stock: 10,
    description: "Boxer Estampada Azul",
    img: "https://www.lenceriamoda.com/images/products_gallery/64889c09db047212968953.jpg",
  },
  {
    id: 2,
    name: "Ropa Interior Mujeres",
    category: "mujeres",
    price: 10000,
    stock: 8,
    description: "Body Con Transparencia",
    img: "https://www.lenceriamoda.com/images/products_gallery/64e7a1eb39b58523263035.jpg",
  },
  {
    id: 3,
    name: "Ropa Interior Niños",
    category: "niños",
    price: 4000,
    stock: 12,
    description: "Boxer Clasico Sienna",
    img: "https://www.lenceriamoda.com/images/products_gallery/6210022e73453566604932.jpg",
  },
  {
    id: 4,
    name: "Ropa Interior Hombre",
    category: "hombres",
    price: 3500,
    stock: 7,
    description: "Boxer Eyelit Negro",
    img: "https://www.lenceriamoda.com/images/products_gallery/63f791264b053598800611.jpg",
  },
  {
    id: 5,
    name: "Ropa Interior Mujeres",
    category: "mujeres",
    price: 8000,
    stock: 11,
    description: "Body Tempest Negro",
    img: "https://www.lenceriamoda.com/images/products_gallery/64d663612e8bc464756928.jpg",
  },
  {
    id: 6,
    name: "Ropa Interior Niños",
    category: "niños",
    price: 4500,
    stock: 6,
    description: "Conjunto Nena Mushi",
    img: "https://www.lenceriamoda.com/images/products_gallery/60d6024abe400769379271.jpg",
  },
  {
    id: 7,
    name: "Ropa Interior Hombre",
    category: "hombres",
    price: 2700,
    stock: 4,
    description: "Boxer Rayado Gris",
    img: "https://www.lenceriamoda.com/images/products_gallery/638a4445691e0220085666.jpg",
  },
  {
    id: 8,
    name: "Ropa Interior Mujeres",
    category: "mujeres",
    price: 12000,
    stock: 3,
    description: "Body Tul Negro",
    img: "https://www.lenceriamoda.com/images/products_gallery/64d638ec9b5c4366047848.jpg",
  },
  {
    id: 9,
    name: "Ropa Interior Niños",
    category: "niños",
    price: 1650,
    stock: 13,
    description: "Boxer Venecia Kids",
    img: "https://www.lenceriamoda.com/images/products_gallery/6419ad753bb84027667794.jpg",
  },
  {
    id: 10,
    name: "Ropa Interior Hombre",
    category: "hombres",
    price: 3600,
    stock: 10,
    description: "Boxer Algodon Estampado",
    img: "https://www.lenceriamoda.com/images/products_gallery/63629dbc7c8ac119946119.jpg",
  },
  {
    id: 11,
    name: "Ropa Interior Mujeres",
    category: "mujeres",
    price: 11000,
    stock: 2,
    description: "Body Golden Flower",
    img: "https://www.lenceriamoda.com/images/products_gallery/64d63aa160dd5571793733.jpg",
  },
  {
    id: 12,
    name: "Ropa Interior Niños",
    category: "niños",
    price: 2450,
    stock: 1,
    description: "Conjunto Nena Happy",
    img: "https://www.lenceriamoda.com/images/products_gallery/645be6a627432564063464.jpg",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    }, 2000);
  });
