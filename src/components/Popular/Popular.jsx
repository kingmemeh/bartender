// import axios from 'axios'
// import { Component } from 'react';
// import './Popular.scss'
// import CocktailIndex from '../CocktailIndex/CocktailIndex';
// import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField, Box, Button } from '@mui/material'

// class Popular extends Component {

//     constructor() {
//         super()

//         this.state = {
//             search: [],
//             data: null,
//             filter: 'ingredient',
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleFilterChange = this.handleFilterChange.bind(this)

//     }
//     handleChange(e) {
//         const searchData = ({ ...this.state.search, [e.target.name]: e.target.value })
//         this.setState({ search: searchData })
//     }

//     handleSubmit(e) {
//         e.preventDefault()
//         const endpoint = this.state.filter === 'ingredient' ? 'filter.php?i' : 'search.php?s'

//         axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}=${this.state.search.searchInput}`)
//             .then(res => this.setState({ data: res.data }))
//         console.log(this.state.data)
//         //.then(() => this.searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }))
//     }

//     handleFilterChange(e) {
//         const filter = e.target.value
//         this.setState({ filter: filter })
//     }

//     // componentDidMount() {
//     //     axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
//     //         .then(response => {
//     //             this.setState({
//     //                 popularCocktails: response.data.drinks
//     //             })
//     //             console.log(response.data)
//     //         })
//     // }



//     render() {
//         return (
//             <>

//                 <h2 className='popular__section-title'>Popular Cocktails</h2>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, maxWidth: '100%' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                     onSubmit={this.handleSubmit}


//                 >

//                     <TextField
//                         id="outlined-basic"
//                         label="Search"
//                         variant="filled"
//                         value={this.state.searchInput}
//                         onChange={this.handleChange}
//                         sx={{
//                             width: "50ch"
//                         }}
//                     />

//                     <Button
//                         variant="contained"

//                         type='submit'
//                     >
//                         Search
//                     </Button>

//                     <FormControl
//                     // on={this.handleFilterChange}
//                     >
//                         <FormLabel id="demo-controlled-radio-buttons-group">Search Filter</FormLabel>
//                         <RadioGroup
//                             row
//                             aria-labelledby="demo-controlled-radio-buttons-group"
//                             name="filter"
//                             value={this.state.filter}
//                             //onChange={this.handleFilterChange}
//                             onChange={() => {
//                                 console.log({ value })
//                             }}

//                         >
//                             <FormControlLabel value="ingredient" control={<Radio />} label="Ingredient"
//                             />
//                             <FormControlLabel value="name" control={<Radio />} label="Cocktail Name" />
//                         </RadioGroup>
//                     </FormControl>
//                 </Box>

//                 {/* <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="field">
//                             <div className="control" onChange={this.handleFilterChange}>
//                                 <label className="radio">
//                                     <input type="radio" name="searchFilter" value="ingredient" defaultChecked={true} /> Ingredient
//                                 </label>
//                                 <label className="radio">
//                                     <input type="radio" name="searchFilter" value="name" /> Cocktail name
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="field has-addons">
//                             <div className="control is-expanded">
//                                 <input
//                                     className="input"
//                                     type="text"
//                                     name="searchInput"
//                                     placeholder="eg. Gin or Margarita"
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                             <div className="control">
//                                 <button className="button search-button">Search</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div> */}
//                 <section className="section">
//                     <CocktailIndex {...this.state.data} />
//                 </section>

//                 {/* <section className='popular__container'>
//                     {this.state.data.map((item) => {
//                         return (
//                             <>
//                                 <div className='hero__popular'>
//                                     <div className='popular__image-container'>
//                                         <img className="popular__image" src={item.strDrinkThumb} alt={item.strDrink}></img>
//                                         {/* <img className="cocktail__image" src={'https://cf.ltkcdn.net/cocktails/images/orig/200804-2121x1414-cocktails.jpg'}/> */}
//                 {/* </div >
//                                     <div className='popular__text-container'>
//                                         <h2 className='popular__title'>{item.strDrink} </h2>
//                                     </div>
//                                 </div>
//                             </>
//                         );
//                     })}
//                 </section> */}


//             </>
//         )

//     }
// }


// export default Popular