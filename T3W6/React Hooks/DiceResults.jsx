import React from "react";



export class DiceResults extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			diceResults: props.diceResults
		}
	}

	render(){
		return (
			<div className="dice-results-viewer">
				<h1>Dice Rolls Results</h1>
				{this.state.diceResults.map((result, index) => {
					return (
						<div key={index}>
							<h3>D{result.diceSize} rolled a {result.roll}</h3>
						</div>
					)
				})}
			</div>
		)
	}
}