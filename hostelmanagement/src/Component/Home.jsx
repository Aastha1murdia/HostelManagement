import React from 'react'
import Footer from './Footer';

function Home() {
    return (
        <>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/img1.png" alt="image" width="100%" height="550px"/>
                </div>
                <div className="carousel-item">
                    <img src="./images/img2.png" alt="image" width="100%" height="550px"/>
                </div>
                <div className="carousel-item">
                    <img src="./images/img3.png" alt="image" width="100%" height="550px"/>
                </div>
                <div className="carousel-item">
                    <img src="./images/img4.png" alt="image" width="100%" height="550px"/>
                </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            <Footer/>   
        </>
    )
}

export default Home
