import React from 'react';
import { Col, Row } from 'reactstrap';

function Pictures(props) {
    return (
        <div>
        <Row>
            <Col>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/luminosity/1640692667539-86c95c.jpeg"
            style={{width:"inherit", marginTop:"", cursor:"pointer"}}/>
            </Col>
        </Row>
        </div>
    );
}

export default Pictures;