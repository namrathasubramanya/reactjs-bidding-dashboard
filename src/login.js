import React, {Component} from 'react';


class LifeCycleDemo extends Component{
	constructor(){
		super(props)
		this.state={
			message: "Hello"
		}
	}
	ComponentDidMount(){
		this.setState(this.state{
			message:"Namratha"
		});
	}
	ComponentDidUpdate(){
		console.log('Hello');
	}
	render(){
		return(
			<div> 
				{this.state.message}
			</div>
		}
		);
	}

}