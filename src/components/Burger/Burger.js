import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const ingrTransformed = Object.keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) =>
                <BurgerIngredient key={ingrKey + i} type={ingrKey} />)
        }).reduce((arr, el) =>
            arr.concat(el), []);
            console.log(ingrTransformed);

    return <div className={classes.Burger}>
        <BurgerIngredients type='bread-top' />
        {ingrTransformed}
        <BurgerIngredients type='bread-bottom' />
    </div>
}

export default burger;