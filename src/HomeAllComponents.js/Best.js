import React from 'react';
import { Col, Row } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Best.css';

function Best(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Row style={{
                marginTop: "4rem", fontWeight: "700",
                fontSize: "32px",
                lineHeight: "48px"
            }}>
                <Col><h1>Best Offers</h1></Col>
                <Row style={{
                    display: "block",
                    color: "#757575",
                    margin: "4px 0 0",
                    fontSize: "18px",
                    lineHeight: "28px",
                }}>
                    <Col>Hygienic & single-use products | low-contact servies</Col>
                </Row>
            </Row>

            <Row style={{ marginTop: "3rem" }}>
                <div className="carouselimg2">
                    <Carousel responsive={responsive}>
                        <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" />
                            <br></br> <span style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                color: "#212121"
                            }}>Salon For Men</span><br></br><p>Flat ₹100 off</p></div>
                        <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" />
                            <br></br> <span style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                color: "#212121"
                            }}>Salon at home for Women</span><br></br><p>Free Waxing</p></div>
                        <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" />
                            <br></br><span style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                color: "#212121"
                            }}>Massage Therapy for Men</span><br></br><p>Starts at ₹499</p></div>
                        <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                            <br></br><span style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                color: "#212121"
                            }}>Bathroom Cleaning</span><br></br><p>Up to 30% off</p> </div>
                        <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" style={{ width: "28rem" }} />
                            <br></br><span style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                color: "#212121"
                            }}>Bathroom and Kitchen Cleaning</span><br></br><p>Up to 50% off</p></div>
                    </Carousel>
                </div>
            </Row>


            <Row>
                <div style={{
                    position: "absolute",
                    marginTop: "1rem"
                }}>
                    <Col><h1>Appliances</h1></Col>
                    <Row>
                        <Col ><p style={{
                            color: "#757575",
                            margin: "4px 0 0",
                            fontSize: "18px",
                        }}>Servicing, Repair, Installation & Uninstallation</p></Col>
                    </Row>
                </div>

                <Row style={{ marginTop: "3rem", }}>
                    <div className="img">
                        <Col style={{ display: "flex", justifyContent: "space-around", padding: "100px" }}>
                            <div>
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Instant Video Consult for Repairs</span><br></br><p>Get free diagnosis</p></div>
                            <div> <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Geyser</span></div>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Water Purifier</span><br></br><p>Up to 45% Off</p> </div>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/Android_Washing.jpg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Washing Machine</span></div>
                        </Col>
                    </div>
                </Row>
            </Row>


            <Row>
                <Col><h1>Cleaning & Pest Control </h1></Col>
                <Row>
                    <div className="imt">
                        <Col style={{ display: "flex", justifyContent: "space-around", padding: "100px", }}>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Bathroom and Kitchen Cleaning</span></div>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Full Home Cleaning</span></div>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Sofa & Carpet Cleaning</span> </div>
                            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" />
                                <br></br><span style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    color: "#212121"
                                }}>Pest Control</span></div>
                        </Col>
                    </div>
                </Row>

            </Row>

            <Row>
                <Col><img style={{ width: "80rem" }} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1602763387610-2c1c7e.jpeg" /></Col>
            </Row>


            


        </div>
    );
}

export default Best;