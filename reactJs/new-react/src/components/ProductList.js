import React from "react";

// const products = null;
const products = [
    {
        id: 3,
        name: "Quần"
    },
    {
        id: 4,
        name: "áo"
    }

]

function ProductList() {
    return(
        <ul>
            {products?.map((item) =>(
                <>
                <li>
                    {item.id}, {item.name}
                </li>
                </>
            )
            )}
        </ul>
    )
}
export default ProductList