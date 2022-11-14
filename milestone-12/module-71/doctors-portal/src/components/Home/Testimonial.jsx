import React from "react";
import patient1 from "../../assets/images/people1.png";
import patient2 from "../../assets/images/people2.png";
import patient3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonial = () => {
  const patientSay = [
    {
      id: 1,
      name: "Joydip Paul",
      say: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: patient1,
      location: "Chunarughat",
    },
    {
      id: 2,
      name: "Nipa Rani Nath",
      say: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: patient2,
      location: "Shahporan",
    },
    {
      id: 3,
      name: "Maisha Akther",
      say: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: patient3,
      location: "Dhaka",
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary font-semibold text-xl">Testimonial</h4>
          <h2 className="text-2xl">What Our Patients Say</h2>
        </div>
        <img src={quote} className="lg:w-48 w-24" alt="" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 my-8 gap-8 p-3">
        {patientSay.map((patient) => (
          <div key={patient.id}>
            <div className="shadow-lg p-8 text-justify">
              <p>{patient.say} </p>
              <div className="flex items-center mt-4 ">
                <div>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={patient.img} alt=''/>
                    </div>
                  </div>
                </div>
                <div className="pl-3">
                  <p className="font-semibold">{patient.name}</p>
                  <p>{patient.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
