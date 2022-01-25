import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Col, Row } from 'reactstrap';
import { Button } from 'antd';
import './CarFile.css';


const { Meta } = Card;




function CardFile({ jobFromData, priceFromeData, ratingFromData, detailsFromData }) {
  return (
    <Card
      style={{ width: 300, padding:"10px" }}
      cover={
        <div className="Cart" style={{ display: "flex" }}>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width="400"
          />
          {/* <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width="100"
         />
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width="100"
          /> */}
        </div>
      }

    >
      <Row>

      <b><Row>{jobFromData}</Row></b>
        <Row style={{color: "gray"}} >{priceFromeData}</Row>
        <Row><Col lg={1} style={{marginTop:"-3px", color: "green"}}><StarOutlined/></Col><Col style={{fontWeight:"800",color: "green"}} lg={1}>{ratingFromData}</Col>
          <Col>
            <Button style={{marginLeft:"8rem",}} type="primary" ghost>
              Add +
            </Button>
          </Col>
        </Row>

      

      </Row>
      <u><p><b style={{marginRight:"13rem"}}>Description</b></p></u>
      {detailsFromData.indexOf(",") != -1 ? detailsFromData.split(",").map(e => (
        <Row>
          <Col>{e}</Col>
        </Row>
      )) :
        <Row>
          {detailsFromData}
        </Row>

      }

    </Card>
  )

}

export default CardFile;