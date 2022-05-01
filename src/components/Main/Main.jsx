import axios from 'axios';
import { Component } from 'react';
import Popular from '../Popular/Popular'
import "./Main.scss"

class Main extends Component {
    state = {
        cocktailData: [],
        
    }   
//     componentDidMount() {
//     axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//       .then(res =>  this.setState({ cocktailData: res.data.drinks[0] }))
//       .catch(err => console.log(err))  
//   }

componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
        this.setState({
            cocktailData: response.data.drinks[0]
        })
        console.log(response.data)
    })}

// axios.get('www.thecocktaildb.com/api/json/v2/9973533/popular.php')
//     .then(res => this.setState({ cocktailData: res.data.drinks[0] }))
//       .catch(err => console.log(err))

render () {
    return (
        this.state.cocktailData ?
        <>
        <header className='header__wrapper'>
            <div >
                <h1>Bartender</h1>
            </div>
                <form action="submit"><button type='submit'> Random</button></form>
        
        </header>
        <section className='hero'>
            <div className='cocktail__image-container'>
            <img className="cocktail__image"src={this.state.cocktailData.strDrinkThumb} alt={this.state.cocktailData.strDrink}></img>
            {/* <img className="cocktail__image" src={'https://cf.ltkcdn.net/cocktails/images/orig/200804-2121x1414-cocktails.jpg'}/> */}
            </div >
            <div className='cocktail__text-container'>
                <h2 className='cocktail__title'>{this.state.cocktailData.strDrink}</h2>
                <div className='cocktail__meta-text'>
                    <div className='cocktail__info'>
                        <h2>Cocktail Info</h2>
                        
                        <p className="cocktail__info-text">Cocktail Glass: {this.state.cocktailData.strGlass} </p>
                    </div>
                    
                    <div>
                        <h2>Ingredients</h2>
                        <ul className="cocktail__ingredients-container">
                            <li className="cocktail__info-text">{this.state.cocktailData.strIngredient1}</li>
                            <li className="cocktail__info-text">{this.state.cocktailData.strIngredient2}</li>
                            <li className="cocktail__info-text">{this.state.cocktailData.strIngredient3}</li>
                            <li className="cocktail__info-text">{this.state.cocktailData.strIngredient4}</li>
                            <li className="cocktail__info-text">{this.state.cocktailData.strIngredient5}</li>
                        </ul>
                    </div>
                    
                            <div className='cocktail__instructions-container'>
                                <h2>Instructions</h2>
                                <p className='cocktail__instructions-text'>{this.state.cocktailData.strInstructions} </p>
                            </div>
                </div>
            </div>
                 
                
        </section>
         <Popular/>  
        {/* <button className="button" type="submit">RANDOMIZER</button> */}
        </>
        :
        <h3>We fucked up....</h3>
    )
}
}

export default Main
