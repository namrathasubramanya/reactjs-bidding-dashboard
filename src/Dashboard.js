import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Cards from './views/Base/Cards/Cards'


export default class Dashboard extends Component {
	constructor(props) {
    	super(props);
			this.state = {highest: 0};
			//this.last_message = 0;
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-172db584-ca6b-4e9c-80a7-4e4d982bcf65',
            subscribeKey: 'sub-c-07e8b65a-78c9-11e8-bf64-d6949d01620d'
        });
    	this.pubnub.init(this);
			// this.state = { highest : 0 };
			console.log({ pubnub: this.pubnub });

    }

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['art1'],
					withPresence: true
			});
			this.pubnub.getMessage('art1', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.getPresence('art1', (presence) => {
					console.log('presence'+presence);
			});
		}

	render() {
		const messages = this.pubnub.getMessage('art1');
		const presence = this.pubnub.getPresence('art1');
	    return (
	    		<div>
						<Cards data={messages.length} highest={this.state.highest}/>
						<br/>
						<br/>
							<ListGroup flush>{messages.map((m, index) => <ListGroupItem><h1 key={'message' + index}>{m.message}</h1></ListGroupItem>)}</ListGroup>
					</div>
				);
	}
}
