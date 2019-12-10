import React from 'react';
import 'semantic-ui-react';

// import './App.css';
import UserCard from './components/UserCard';
import CardList from './components/CardList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			MyData: [],
			MyFollowers: []
		};
	}

	componentDidMount() {
		this.FetchMyData();
		this.FetchMyFollowers();
	}

	FetchMyData = () => {
		fetch('https://api.github.com/users/ashbenj')
			.then(res => {
				return res.json();
			})
			.then(data => {
				return this.setState({ MyData: data });
			})
			.catch(err => console.log(err));
	};

	FetchMyFollowers = () => {
		fetch('https://api.github.com/users/ashbenj/followers')
			.then(res => {
				return res.json();
			})
			.then(data => {
				return this.setState({ MyFollowers: data });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div className='App'>
				<h1>GitHub User Card</h1>
				<UserCard MyData={this.state.MyData} />
				<CardList MyFollowers={this.state.MyFollowers} />
				{/* {console.log(this.state.MyData)} */}

				{/* {console.log(this.state.MyFollowers)} */}
				{/* <UserCard MyData={this.state.MyData} /> */}
			</div>
		);
	}
}

export default App;
