import React, { Component } from 'react';
import CardList from './CardList';
import {robots_array } from './robots';
import 'tachyons';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			// Var Name : Init Value
			robots: robots_array,
			searchfield: '',
			date1:  new Date()
		};
	}
		// Like a Start
	  	componentDidMount() {
		    setInterval(() => this.tick1(),
		      1000
		    );
	  	}

		tick1() {
		    this.setState({
		      date1: new Date()
		    });
		    //this.setState({ searchfield: "Yanis" })
		  }
	
	mySearchFun = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className = 'tc'>
				<h1 className = 'f1'>RoboFriends New</h1>
				<h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
				<div>
					<input 
						className='pa3 ba b--green bg-lightest-blue'
						type='search' 
						placeholder='search robots' 
						onChange={this.mySearchFun}
					/>
				</div>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;