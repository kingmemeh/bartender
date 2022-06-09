import React from 'react'
import './CocktailCard.scss'
import { MdOutlineArrowForward } from "react-icons/md";
const CocktailCard = (props) => {
    return (
        <div className="container">
            <article className="card">
                <div className="card__media">
                    {<img src={props.strDrinkThumb} alt={props.strDrink} className='card-image' />}
                </div>
                <div className="card__header">
                    <h3 className="card__header-title">{props.strDrink}</h3>
                    <MdOutlineArrowForward className="card__header-icon" />
                </div>
            </article>
        </div>
    )
}



export default CocktailCard