import React from 'react'

const Category = ({ productCategories, categoryFilter, setCurrentComp }) => {
    return (
        <>
            <h3>Category</h3>
            {productCategories.map((p, i) => {
                const data = { product: p, category: "category" }
                return (
                    <p key={i} onClick={() => {
                        categoryFilter(data);
                        setCurrentComp("All");
                    }}>{p}</p>
                )
            })}
        </>
    )
}

export default Category