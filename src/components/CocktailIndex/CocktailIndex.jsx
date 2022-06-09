import { Fade, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import CocktailCard from '../CocktailCard/CocktailCard'
import './CocktailIndex.scss'


export default function CocktailIndex({ index, searched }) {
    const props = index

    return (
        <Grid
            container
            display='flex'
            direction="row"
            wrap='wrap'
            justifyContent="center"
            alignItems="center">

            {props.drinks.map(cocktail =>
                <div key={cocktail.idDrink} className="column">
                    {/* <Link to={`/cocktails/${cocktail.idDrink}`}> */}
                    <CocktailCard {...cocktail} />
                    {/* </Link> */}
                </div>
            )}
        </Grid>
    )
}

