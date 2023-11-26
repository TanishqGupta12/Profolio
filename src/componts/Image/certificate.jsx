import React from "react";

// import Image1 from "./Al.jpg";
// import Image2 from "./Certificate_page-0001.jpg";
import Image3 from "./LIBREOFFICE_SUITE CALC_pdf_page-0001.jpg";
import Image4 from "./data analysis_page-0001.jpg";
import Image5 from "./java_training_page-0001.jpg";
import Image6 from "./machine-learning-30-day-s_page-0001.jpg";
import Image7 from "./python-10-days_page-0001.jpg";
import Image8 from "./sql_page-0001.jpg";
// import Image9 from "./Python.png";

const Certificate = () => {
  return (
    <>
      <div className="Main_Certificate" id="H1-Certificate">
        <h1 className="H1-Certificate">Certificate</h1>

       <div  className= "Certificate_layout " >
       <div>
          <img src={Image3} alt="ImageAltText" />
        </div>
        <div>
          <img src={Image5} alt="ImageAltText" />
        </div>

        <div>
          <img src={Image8} alt="ImageAltText" />
        </div>
        <div>
          <img src={Image6} alt="ImageAltText" />
        </div>
        <div>
          <img src={Image7} alt="ImageAltText" />
        </div>
        <div>
          <img src={Image4} alt="ImageAltText" />
        </div>

       </div>
      </div>
    </>
  );
};

export default Certificate;
