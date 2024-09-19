import { Category } from "@mui/icons-material";

export const getProducts = async () =>{
    const res = await fetch("http://localhost:3000/products/api/get-all");
    const products = res.json();
    
    return products;
}

export const getProductDetails = async (id) =>{
    const res = await fetch(`http://localhost:3000/products/api/${id}`);
    const product = res.json();
    
    return product;
}


export const getProductByCategory = async (category) =>{
    const res = await fetch(`http://localhost:3000/products/api/category?category=${category}`);
    const products = res.json();
    
    return products;
}