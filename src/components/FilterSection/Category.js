import React from 'react'

const Category = ({ productCategories, categoryFilter, setCurrentComp, setFilterPopup }) => {
    return (
        <>
            <h3>Category</h3>
            {productCategories.map((p, i) => {
                const data = { product: p, category: "category" }
                return (
                    <p key={i} onClick={() => {
                        categoryFilter(data);
                        setCurrentComp("All");
                        setFilterPopup(false);
                    }}>{p}</p>
                )
            })}
        </>
    )
}

export default Category