import axios from 'axios';
import { Component, useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Popular from '../Popular/Popular'
import SearchForm from '../SearchForm/SearchForm';
import { Paper, Box, Grid, Card, Typography } from '@mui/material'
import "./Main.scss"
import { display, minHeight } from '@mui/system';

export default function Main() {
    // state = {
    //     cocktailData: [],

    // }
    const [cocktailData, setCocktailData] = useState([])

    async function fetchCocktailData() {
        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        setCocktailData(request.data.drinks[0])
        return request;
    }

    useEffect(() => {
        fetchCocktailData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchCocktailData()
        console.log(cocktailData)

    }


    return (
        <>
            <NavBar random={handleSubmit} />
            <Box
                m={2}
            >
                <Paper
                    sx={{ backgroundColor: "#17386e" }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems='center'
                    >
                        {/* <section className='hero'> */}
                        <Grid
                            container
                            item xs={12} md={4}
                        >
                            <div className='hero__image-container'>
                                <h2 className='hero__header'>{cocktailData.strDrink}</h2>
                                <img className="hero__image" src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink}></img>
                            </div >
                        </Grid>
                        <Grid
                            container alignItems="flexstart" xs={12} sm={12} md={8}
                            direction={{ xs: 'row', md: 'column' }}
                            px={3}


                        >
                            <Grid
                                item xs
                                alignItems='stretch'
                            >
                                <h2>Cocktail Info</h2>
                                <p className="hero__text--body">Cocktail Glass: {cocktailData.strGlass} </p>
                            </Grid>
                            <Grid
                                item xs
                                variant="outlined"
                                alignItems='stretch'
                            >
                                <h2>Ingredients</h2>
                                <ul className="hero__text--list">
                                    <li className="hero__text--body">{cocktailData.strIngredient1}</li>
                                    <li className="hero__text--body">{cocktailData.strIngredient2}</li>
                                    <li className="hero__text--body">{cocktailData.strIngredient3}</li>

                                </ul>
                            </Grid>

                            <Grid
                                item xs
                                variant="outlined"
                                alignItems='stretch'
                            >
                                <h2>Instructions</h2>
                                <p className='hero__text--body'>{cocktailData.strInstructions}</p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <SearchForm />




        </>
    )
}



