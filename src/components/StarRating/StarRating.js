import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'

const StarRating = ({ stars }) => {
    const rating = Array.from({ length: 5 }, (el, index) => {
        const halfStar = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <AiFillStar size={20} style={{ fill: "orange" }} />
                ) : stars >= halfStar ? (
                    <FaStarHalfAlt size={20} style={{ fill: "orange" }} />
                ) : <AiOutlineStar size={20} style={{ fill: "orange" }} />}
            </span>
        )
    })
    return (
        <span>{rating}</span>
    )
}

export default StarRating