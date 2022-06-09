import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Fade, FormControlLabel, Radio, RadioGroup, TextField, Grid, Button, Box } from '@mui/material'
import CocktailIndex from "../CocktailIndex/CocktailIndex";
import axios from "axios";





export default function SearchForm() {
    const initialFValues = {
        search: '',
        filter: '',
    }

    const [values, setValues] = useState(initialFValues);
    const [fetchedData, setfetchedData] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }
    async function fetchData() {
        const endpoint = values.filter === 'ingredient' ? 'filter.php?i' : 'search.php?s'
        const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}=${values.search}`);
        setfetchedData(request.data)

        return request;
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
        setSearched((prev) => !prev);
        console.log(fetchedData)
    }


    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setValues(
            {
                ...values,
                [name]: value
            }
        )
        console.log(values.filter)
    }

    return (

        <Box>
            <Grid container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
            //wrap="nowrap"
            >
                <Grid item xs={4} >
                    <TextField
                        inputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        autoComplete='off'
                        name="search"
                        label="Search"
                        variant="filled"
                        placeholder="Like Vodka or Mojito"
                        value={values.search}
                        onChange={handleInputChange}
                        sx={{
                            // width: 500,
                            // maxWidth: '50ch',
                        }}
                    />
                </Grid>
                <Grid item xs={6}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <RadioGroup
                        row
                        name="filter"
                        value={values.filter}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="ingredient" control={<Radio />} label="Ingredient" />
                        <FormControlLabel value="name" control={<Radio />} label="Cocktail Name" />
                    </RadioGroup>

                    <Button
                        variant="contained"
                        type='submit'
                        onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>

            </Grid>
            {searched ? (
                <Box sx={{ display: 'flex' }}
                    visibility={searched}
                >
                    <Grid container
                        wrap="wrap"
                    >
                        <CocktailIndex index={fetchedData} showIndex={searched} />
                    </Grid>

                </Box>)
                : (<div></div>)
            }
        </Box >
    )
}
