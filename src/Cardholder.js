import React, {PureComponent} from 'react';
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button 
} from 'reactstrap';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Cardholder extends PureComponent {
  render(){
    return (
      <div>
        <Card>
          <CardImg top width="10%" src={this.props.image} alt="Card image cap" />
          <CardBody>
            <CardTitle><h1>{this.props.name}</h1></CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.description}</CardText>
            <Route render={({ history}) => (
              <Button className="btn btn-info" onClick={() => { history.push('/art1') }}>
                Join the event
              </Button>
            )} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

Cardholder.propTypes = {
  name: PropTypes.string
};

Cardholder.propTypes = {
  description: PropTypes.string
};

Cardholder.propTypes = {
  image: PropTypes.string
};

Cardholder.propTypes = {
  click: PropTypes.string
};
