import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'


const buildControls = (props) => {

    const controls = [
        { label: 'Meat', type: 'meat' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Salad', type: 'salad' },
    ]
    return controls.map((control) =>
        <div className={classes.BuildControls}>
            <BuildControl label={control.label}
                key={control.label}
                add={props.add.bind(this, control.type)}
                remove={props.remove.bind(this, control.type)} /></div>)
}

export default buildControls;