import React from "react";
import "./Edu.css"

function Edu(){

    return(
        <>
        <div className="Edu-container">
          <div className="Inside-container">
              <div className="Heading">
                <h3>Education</h3>
              </div>
              <div className="divider">
                <div className="divider-column">
                  <h2>
                  Florida Gulf Coast University
                  </h2>
                  <p>
                      Software Enginering BS Degree 2026
                  </p>
                  
                    {/* Grab the image "Main_logo1.png from the public file" */}
                    <img src={process.env.PUBLIC_URL + '/images/main_logo1.png'} alt="Its me" /> 
              </div>
              </div>
          </div>
           
           
        </div>
        </>
    );

}

export default Edu;