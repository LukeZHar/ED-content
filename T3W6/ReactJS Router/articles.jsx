import React from "react";
import { Link } from "react-router-dom";

export class Articles extends React.Component {
	constructor(props){
		super(props);

		// Establish the containers for expected data.
		// Not super required, just a good habit to have - 
		// make it clear what data _should_ be here in this component.
		this.state = {
			articles: [],
			users: []
		}
	}

	// Remember: React has lifecycle methods in components!
	// This will run when the component has first rendered, and never again.
	componentDidMount(){
		
		// This fetches an array of objects and stores that array into the component state.
		// This works because we know (or can visit the API to confirm) that the API returns JSON.
		// If it didn't, then we'd have more processing to do before applying data to state.
		fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => this.setState({articles: json}));
		fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(json => this.setState({users: json}));
	}

	render(){
		return(
			<div>
				<h1>Articles</h1>

				{/* If no articles exist, this will render nothing automatically. */}
				{this.state.articles.map((article) => {
					return(

						// React can figure out what when we're rendering a list of data,
						// and expects each piece of data to have its own key property.
						<div key={article.id}>
							<h2>{article.title}</h2>

							{/* Array.filter() lets us dig through one array to return a smaller array, based on the value of whatever we want. */}
							{/* Here, we only care about the first (ideally the only) match found in the filter. */}
							<h4>Written by {this.state.users.filter(user => user.id === article.userId)[0]?.name}</h4>

							{/* String interpolation to create a link unique to each article must be wrapped in {} curly brackets. */}
							<Link to={`/articles/${article.id}`}>Read article</Link>
						</div>
					)
				})}
			</div>
		)
	}
}
