import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap';
import './NavBar.css';
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';


const { Search } = Input;

function NavBar({locationFromHome}) {
const[loctioObjectWithValues,setLoctioObjectWithValues]=useState({})
useEffect(()=>{
    setLoctioObjectWithValues(locationFromHome)


},[locationFromHome])
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            {(Object.keys(loctioObjectWithValues).length>1) ?
              (loctioObjectWithValues.results.map((e,index )=>( 
            
            <Menu.Item key={index} icon={<UserOutlined />}>
                {e.formatted_address}
            </Menu.Item>
            )))
            :
            (<div></div>)
} 
        </Menu>
    );

    return (
        <div>
            <Row style={{ color: "white", padding: "1.5rem" }}>
                <Col lg="4">

                </Col>

                <Col lg="4">
                    <a href="">  <p style={{
                        display: "flex", justifyContent: "end",
                        fontWeight: "bold", color: "white"
                    }}>Blog</p></a>
                </Col>
                <Col style={{
                    display: "flex", justifyContent: "end",
                    fontWeight: "bold"
                }}>
                    <a href="#">
                        <p style={{ color: "white" }}><u>Register As A Profssional</u></p>
                    </a>
                </Col>
                <Col>
                    <a href="">  <p style={{
                        color: "white",
                        fontWeight: "bold"
                    }}> Login / Sing up </p></a>
                </Col>

            </Row>

            <Row style={{ marginTop: "7rem" }}>
                <Col>
                    <Breadcrumb>

                        <Breadcrumb.Item >
                            <a href="" style={{ color: "white" }}>Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="" style={{ color: "white" }}>Chennai</a>
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h1 style={{ color: "white", fontSize: "3.4rem", fontWeight: "bold" }}>Home services, on demand.</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={4} style={{ display: "flex", justifyContent: "end", }}>
                    <Dropdown overlay={menu}>
                        <Button style={{ display: "flex", alignItems: "center", }}>
                            <EnvironmentOutlined />Chennai central <DownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
                <Col lg={6} >
                    <Search  placeholder="Search for services" enterButton />
                </Col>
            </Row>
            <br></br>
            <Row style={{ color: "white", fontSize: "1rem" }}>
                <Col>
                    <p><u>Men's Therapies,HomePainting,Electricions</u> etc</p>
                </Col>
            </Row>

        </div>


    );
}


export default NavBar;

