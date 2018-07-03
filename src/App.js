import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

export default class App extends Component {
  render() {
    return (
    	<div>
    		<Header/>
    		<Main/>
  		</div> 
    );
  }
}
