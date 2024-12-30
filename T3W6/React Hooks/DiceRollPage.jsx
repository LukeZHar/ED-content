import React from "react";
import { rollDice } from "../utils/diceRolling";


export class DiceRollPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            presetDiceSize: props.diceSize,
            canCustomizeDice: !props.diceSize ? true : false,
            diceSize: Number.isInteger(props.diceSize) ? props.diceSize : 20
        }
    }

    componentDidUpdate() {
        if (this.props.diceSize !== this.state.presetDiceSize) {
            window.location.reload();
        }
    }


    render() {
        return (
            <div className="dice-roll-page">
                {this.state.canCustomizeDice &&
                    <div className="dice-size-setting">
                        <label>Max size of dice:</label>
                        <input type="number" value={this.state.diceSize} min={2} max={100} onChange={(event) => this.setState({ diceSize: event.target.value })} />
                    </div>
                }

                <h1>Roll the dice!</h1>
                <button onClick={() => {
                    this.props.addRollToResults(prevState => ({
                        diceRollResults: [...prevState.diceRollResults, rollDice(this.state.diceSize)]
                    }))
                }} >
                    ROLL D{this.state.diceSize}
                </button>
            </div>
        )
    }
}