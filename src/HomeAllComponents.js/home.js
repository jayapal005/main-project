import React from 'react';
import NavBar from './NavBar';
import './home.css';
import Catagories from './Catagories';
import Pictures from './Pictures';
import HomeFooter from './HomeFooter';
import CarouselComponent from './CarouselComponent';
import Best from './Best';










function Home({loctionFromApp}) {

    return (
        <div className="HomeMain"  >
            <div className="backgroundImage">

                <NavBar locationFromHome={loctionFromApp}/>
                <Catagories/>
                <CarouselComponent/>
                <Pictures/>
                <Best/>
                <HomeFooter/>

            </div>



        </div>

    );


}


export default Home;