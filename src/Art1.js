import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import Img from 'react-image'
import image9 from './image9.jpg';
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Art1 extends Component {
	constructor(props) {
    	super(props);
    	this.state = {value: ''};
    	this.pubnub = new PubNubReact({
            publishKey: 'ENTER_YOUR_PUBLISH_KEY',
            subscribeKey: 'ENTER_YOUR_SUBSCRIBE_KEY'
        });
    	this.pubnub.init(this);
    	this.handleChange = this.handleChange.bind(this);
   	 	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
			var startingBid = 30;
  		var data =localStorage.getItem('Username');
  		console.log('localStorage'+data);
  		var message = data+" : "+this.state.value;
			if(data != null) {
			if(this.state.value > startingBid && this.state.value < 1000000) {
				this.pubnub.publish({
	                message: message,
	                channel: 'art1'
	        });
			} else {
				alert("Enter value between Starting Bid and 1000000!");
			}
		}else {
			alert("Enter username!");
		}
    	event.preventDefault();
  	}

		componentWillMount() {
         this.pubnub.subscribe({
             channels: ['art1'],
             withPresence: false
         });
         this.pubnub.getMessage('art1', (msg) => {
         	var data = localStorage.getItem('username');
             console.log(msg.message);
 						this.last_message = msg.message;
 						console.log('this.last_message 1'+this.last_message);
         });
 				
     }

	render() {
			const messages = this.pubnub.getMessage('art1');
	    return (
	    	<div>
					<Row>
						<Col md={6}>
				    	<Img height={360} width={636} src={image9}/>
				    	<br/>
				    	<br/>
				    	<form onSubmit={this.handleSubmit} style={{marginLeft: 10 + 'em'}}>
									<h2> Starting bid: $30 </h2>
			        		<label>
			          			<FormControl type="number" pattern="[0-9]*" inputMode="numeric" value={this.state.value} onChange={this.handleChange} />
			        		</label>
			        		<Button className="btn btn-info btn-lg" type="submit" value="Submit" style={{marginLeft: 10 + 'px'}}>Place Bid</Button>
			      	</form>
						</Col>
						<Col md={6}>
							<ListGroup>{messages.map((m, index) => <ListGroupItem><h1 key={'message' + index}>{m.message}</h1></ListGroupItem>)}</ListGroup>
						</Col>
					</Row>
      	</div>
	    );
	}
}
