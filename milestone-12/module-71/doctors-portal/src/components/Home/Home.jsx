import React from "react";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import "../../Style/Banner.css";
import Services from "./Services";
import Treatment from "./Treatment";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="mx-5">
      <div className="bg-image" >
        <Banner></Banner>
        <InfoCards></InfoCards>
      </div>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>

  );
};

export default Home;
