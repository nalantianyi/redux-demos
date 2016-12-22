/**
 * Created by nalantianyi on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };
    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }
    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 500);
    }

    render() {
        const {value, onIncrement, onDecrement}=this.props;
        return (
            <p>Clicked:{value} times
                <br/>
                <button onClick={onIncrement}>+</button>
                <br/>
                <button onClick={onDecrement}>-</button>
                <br/>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <br/>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>

        );
    }
}