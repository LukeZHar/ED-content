import { NavLink } from "react-router-dom";

export function Navbar(props){

	// Navlink content directly as-is from the "Links and Routes" page of the React Router Ed lesson.
	let activeNavStyle = {
		textDecorationColor: "green",
		textDecorationLine: "line-through"
	}

	return(
		<nav>
			<ul>
				<li>
					<NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/articles" end style={({isActive}) => isActive ? activeNavStyle : undefined}>
						Articles
					</NavLink>
				</li>				
			</ul>
		</nav>
	)
}