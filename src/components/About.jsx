import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
              Here we are there for you to order and give you the best food.
              Life is all about finding new tastes and flavors. Give ours a shot.
              Feast your eyes (and stomach) on this mouth-watering [food].in our best food
              Our new menu is a journey, and each dish is a thrilling destination
              
            </p>

            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
                </div>

                <div className="banner">
            <img src="about.png" alt="about" />
          </div>
          
            </div>
        </section>
    )
}

export default About