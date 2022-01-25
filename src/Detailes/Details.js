import React from 'react';
import { Col, Row } from 'reactstrap';
import VerticalTabs from './TabSwichers';

function Details(props) {
    return (
       <Row>
           <Col >
               <Row>
                   <VerticalTabs/>
               </Row>
           </Col>
           
       </Row>
    );
}

export default Details;