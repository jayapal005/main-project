import React from 'react';
import { Col, Row } from 'reactstrap';
import VerticalTabs from './TabSwichers';

function Details(props) {
    return (
       <Row>
           <Col lg={3}>
               <Row>
                   <VerticalTabs/>
               </Row>
           </Col>
           <Col lg={5}></Col>
       </Row>
    );
}

export default Details;