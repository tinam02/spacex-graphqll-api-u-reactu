import SpaceMission from "./graphql/index";
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async function () {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };
  useEffect(() => {
    loadSpaceMission();
  }, []);
  console.log(data);

  return (
    <div style={{backgroundColor: "#fff",}}>
      <MDBContainer
        style={{
          color:'#fff',
          margin: "auto",
          padding: "15px",
          maxWidth: "720px",
          alignContent: "center",
          backgroundColor: "#25e",
        }}
      >
        <MDBRow style={{ maxWidth: "680px" }}>
          <h2 className='text-center' >Spacex GraphQL API</h2>
          {data.map((item, index) => (
            <MDBCard key={index} style={{ margin: "20px", backgroundColor: "#36e"}}>
              <MDBCardImage
                src={
                  item && item.ships[0] && item.ships[0].image
                    ? item.ships[0].image
                    : "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/06/europe_s_rockets/19421217-6-eng-GB/Europe_s_rockets_pillars.jpg"
                }
                style={{ padding: "15px", borderRadius: "15px!important" }}
              />
              <MDBCardTitle className="text-center">
                {item.launch_site.site_name_long} 
              </MDBCardTitle>
              <MDBCardBody className="text-center">{item.mission_name}</MDBCardBody>
            </MDBCard>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
