import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Img from 'react-image'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';

const Home = () => (
  <div> 
    <Carousel>
      <Carousel.Item>
        <Img alt="image4" src={image4}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image2" src={image2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image3" src={image3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image6" src={image6}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image5" src={image5}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img alt="image1" src={image1}/>
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <Row>
      <Col md={4}>
        <Img src={image7} alt="Image"/>
        	<p>Description</p>
      </Col>
      <Col md={4}> 
        <Img src={image8} alt="Image"/>
        	<p>Description</p>    
      </Col>
      <Col md={4}>
        <div>
         	<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel velit ornare, aliquet dolor sit amet, pharetra velit. Mauris laoreet lectus eget diam luctus, a dictum felis eleifend. Maecenas venenatis nunc quam, at ultricies quam fermentum sed. In vulputate velit nec quam tincidunt, a faucibus ligula laoreet. Phasellus venenatis enim elit, a eleifend mauris interdum id. Fusce sodales, massa ut viverra egestas, tortor ligula congue nulla, a feugiat elit mauris at libero. Aenean dignissim risus nec ultricies volutpat. Fusce viverra finibus justo, id imperdiet augue pellentesque id. Mauris rutrum arcu ac odio sollicitudin, a fermentum nisl sollicitudin. Fusce iaculis augue ac mauris iaculis, at finibus metus aliquam. Cras sed pulvinar mi. Aliquam erat volutpat. Nam consequat leo a est auctor, vel placerat mi lobortis.

  Nulla consectetur lorem eu magna fermentum suscipit. Aenean non efficitur nibh. Integer nec massa at elit consequat bibendum ut sit amet sem. Vivamus condimentum neque vel mattis elementum. Nullam pellentesque et sem non hendrerit. Etiam justo magna, iaculis at lorem sed, mattis sollicitudin tortor. Suspendisse quis pretium libero, et volutpat turpis. Aliquam a eros diam. Fusce fermentum feugiat rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ut imperdiet augue. Nulla quis sapien eget ante rutrum consequat vel lobortis erat.

  Vestibulum et sagittis arcu, eget laoreet tellus. Duis urna orci, venenatis vitae eros et, tempor tincidunt libero. Etiam maximus turpis ac velit blandit, dapibus posuere sem feugiat. Curabitur sodales venenatis varius. Cras cursus viverra tincidunt. Ut eget ante eleifend, tempus ligula eu, feugiat ex. Curabitur at pulvinar massa. Integer tellus risus, scelerisque at augue ut, cursus vestibulum dui. Maecenas scelerisque, tortor hendrerit cursus volutpat, ante risus scelerisque leo, et cursus massa elit vel dolor. Vivamus pulvinar nibh quis commodo egestas. </p>
  		  </div>
      </Col>
    </Row>
  </div>
)

export default Home
