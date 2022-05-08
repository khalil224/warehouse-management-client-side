import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-island-59230.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts]
}

export default useProducts;