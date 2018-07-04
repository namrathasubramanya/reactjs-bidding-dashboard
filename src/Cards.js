import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import PropTypes from 'prop-types';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Number of Bids</header>
                  <h1>{this.props.data}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Highest bid</header>
                  <h1>{this.props.highest}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Users online</header>
                  <h1>{this.props.people}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Cards.propTypes = {
  data: PropTypes.string,
  highest: PropTypes.string,
  people: PropTypes.string
};

export default Cards;
