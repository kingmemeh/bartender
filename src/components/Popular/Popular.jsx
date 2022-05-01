import axios from 'axios'
import { Component } from 'react';
import './Popular.scss'

class Popular extends Component {
    state = {
        popularCocktails: []
    }

componentDidMount() {
axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
.then(response => {
    this.setState({
        popularCocktails: response.data.drinks
    })
    console.log(response.data)
})
}

render () { 
    return (
        <>
        <h2 className='popular__section-title'>Popular Cocktails</h2>
        <section className='popular__container'>
       { this.state.popularCocktails.map((item) => {
            return(
        <>
            <div className='hero__popular'>
                <div className='popular__image-container'>
                <img className="popular__image"src={item.strDrinkThumb} alt={item.strDrink}></img>
                {/* <img className="cocktail__image" src={'https://cf.ltkcdn.net/cocktails/images/orig/200804-2121x1414-cocktails.jpg'}/> */}
                </div >
                <div className='popular__text-container'>
                    <h2 className='popular__title'>{item.strDrink} </h2>
                </div>
            </div>
        </>
        );
    })}
    </section>
    </>
    )
}}


export default Popular