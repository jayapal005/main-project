import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';



function Catagories() {

    const [dataCatagory, setdataCatagory] = useState([]);
    const [categoriesWithoutDups, setCategoriesWithoutDups] = useState([]);

    useEffect(() => {

        let getCatagoryData = async () => {
            let data = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            setdataCatagory(await data.data);
            let colWithoutDup = [];
            let categoriesWithoutDuplicates = await data.data.map(e => {
                if (!colWithoutDup.includes(e.mainCategory)) {
                    if (e.mainCategory != undefined) {
                        colWithoutDup.push(e.mainCategory);
                    }
                }
            })
            setCategoriesWithoutDups(colWithoutDup)
        };
        getCatagoryData();

    }, [])


    let icons = {
        "Saloon for women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
        "Hair Service For Women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png",
        "Women's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
        "Salon for Men": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
        "Men's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
        "Home Painting": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
        "Cleaning & pest Control": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        "Electrician": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        "Plumbers & Carpenters": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
        "AC/Appliance Repair": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    }



    return (
        <div>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col lg={8}>
                    <Row style={{ backgroundColor: " whitesmoke", position: "relative", top: "7rem", padding: "20px", borderRadius: "5px", boxShadow: "5px 10px #adb5bd" }}>


                        {categoriesWithoutDups.map((e) => (
                            <Col lg={3} style={{ height: "fit-content" }}  >
                                <Avatar size={45} src={icons[e]} />
                                <p>{e}</p>
                            </Col>
                        ))}





                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default Catagories;