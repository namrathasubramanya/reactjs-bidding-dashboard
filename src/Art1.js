import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import Img from 'react-image'
import Iframe from 'react-iframe'
import User1 from './User1'
import image9 from './image9.jpg';
import PubNubReact from 'pubnub-react';

export default class Art1 extends Component {
	constructor(props) {
    	super(props);
    	this.state = {value: ''};
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-172db584-ca6b-4e9c-80a7-4e4d982bcf65',
            subscribeKey: 'sub-c-07e8b65a-78c9-11e8-bf64-d6949d01620d'
        });
    	this.pubnub.init(this);
    	this.handleChange = this.handleChange.bind(this);
   	 	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
  		this.pubnub.publish({
                message: this.state.value,
                channel: 'art1'
        });
    	event.preventDefault();
  	}
	render() {
	    return (
	    	<div>
		    	<Img height={360} width={636} src={image9}/>
		    	<br/>
		    	<br/>
		    	<form onSubmit={this.handleSubmit}>
	        		<label>
	          			<FormControl type="text" value={this.state.value} onChange={this.handleChange} />
	        		</label>
	        		<Button className="btn btn-info btn-lg" type="submit" value="Submit">Submit Bid</Button>
	      		</form>
      		</div>
	    );
	}
}