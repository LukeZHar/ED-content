/*
Hey! This example solution uses React hooks!

Don't worry if it doesn't make sense if you haven't learned that topic yet - 
this component's functionality was optional in the challenge anyway.

*/


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function ArticlePage(props){

	// Get the article ID via a route param.
	let {id} = useParams();

	// Prepare state for expected data.
	let [articleData, setArticleData] = useState({});
	let [userData, setUserData] = useState({});

	// When the id variable has value assigned to it or has its value changed, fetch post data based on that ID.
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json()).then(json => setArticleData(json));
	}, [id]);

	// After we get the post/article data, then we can fetch the user author data.
	useEffect(() => {
		// This line helps reduce unnecessary fetch requests.
		if (articleData.userId == null) return;

		fetch(`https://jsonplaceholder.typicode.com/users/${articleData.userId}`).then(response => response.json()).then(json => setUserData(json));
	}, [articleData.userId])

	return(
		<div>
			<h1>Article ID {id}</h1>
			<h1>{articleData.title}</h1>
			<h3>Written by {userData.name}</h3>
			<p>{articleData.body}</p>
		</div>
	)
}
