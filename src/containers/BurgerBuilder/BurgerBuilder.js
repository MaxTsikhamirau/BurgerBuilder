import React, { Component } from 'react';
import Aux from '../../hoc/Auxis';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    meat: 2,
    cheese: 0.5,
    salad: 0.8,
    bacon: 1
}

class BurgerBuilder extends Component {


    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4

    }

    addIngredientHandler = (ingredientType) => {
        const oldCount = this.state.ingredients[ingredientType];
        let updatedIngredients = this.state.ingredients;
        let totalPrice = this.state.totalPrice;
        updatedIngredients[ingredientType] = oldCount + 1;
        this.setState({ ingredients: updatedIngredients, totalPrice: totalPrice + INGREDIENT_PRICES[ingredientType] });
    }

    removeIngredientHandler = (ingredientType) => {
        const oldCount = this.state.ingredients[ingredientType];
        let updatedIngredients = this.state.ingredients;
        let totalPrice = this.state.totalPrice;
        updatedIngredients[ingredientType] = oldCount > 0 ? oldCount - 1 : oldCount;
        const updatedPrice = oldCount > 0 ? totalPrice - INGREDIENT_PRICES[ingredientType] : totalPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
    }

    render() {
        console.log(this.state.totalPrice);
        return <div>

            TOTALPRICE:{this.state.totalPrice}

            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                add={this.addIngredientHandler}
                remove={this.removeIngredientHandler} />
        </div>
    }
}

export default BurgerBuilder;