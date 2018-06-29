import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';

export default class Dashboard extends Component {
	constructor(props) {
    	super(props);
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-172db584-ca6b-4e9c-80a7-4e4d982bcf65',
            subscribeKey: 'sub-c-07e8b65a-78c9-11e8-bf64-d6949d01620d'
        });
    	this.pubnub.init(this);
    }
	 componentWillMount() {
        this.pubnub.subscribe({
            channels: ['art1'],
            withPresence: true
        });
        this.pubnub.getMessage('art1', (msg) => {
            console.log(msg.message);
        });
    }
	render() {
		const messages = this.pubnub.getMessage('art1');
	    return (
	    		
	    		<h1>{messages.map((m, index) => <p key={'message' + index}>{m.message}</p>)}</h1>
	    	);
	}
}