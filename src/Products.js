import React, {PureComponent} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardholder from './Cardholder';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.png';
import image13 from './image13.jpg';
import image14 from './image14.jpg';

export default class Products extends PureComponent{
	render(){
		return(
			<div>
				<Row>
					<Col md={4}>
		  				<Cardholder name="Art 1" description="Description of Art 1" image={image9}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Art 2" description="Description of Art 2" image={image10}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Art 3" description="Description of Art 3" image={image11}/>
		  			</Col>
		  		</Row>
		  		<Row className="row">
					<Col md={4}>
		  				<Cardholder name="Art 4" description="Description of Art 4" image={image12}/>
		  			</Col>
			  		<Col md={4}>
			  			<Cardholder name="Art 5" description="Description of Art 5" image={image13}/>
			  		</Col>
			  		<Col md={4}>
			  			<Cardholder name="Art 6" description="Description of Art 6" image={image14}/>
			  		</Col>
		  		</Row>
			</div>
		);
	}
}

