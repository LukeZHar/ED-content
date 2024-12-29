import React from 'react';
import CardDisplay from './cardDisplay';
import CardForm from './cardForm';


class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			email: '',
			linkedIn: '',
			github: ''
		}
	}

	updateState = (stateKey, newValue) => {
		this.setState({
			[stateKey]: newValue 
		});
	}


	render(){
		return( 
		<div className="App" >
			<CardForm card={this.state} updateState={this.updateState} />
			<CardDisplay card={this.state} />
		</div>
		)
	}
}

export default App;