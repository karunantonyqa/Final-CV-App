import React, { Component } from "react";
import NavbarFeatures from "./NavBarFeatures";
import ProfilePage from "../containers/ProfilePage";
import CVTable from "../containers/CVTable";
import { Table, Grid, Row, Col, Clearfix } from "react-bootstrap";
// import UploadCV from "../components/UploadCV";
import TraineeCVPage from "../containers/TraineeCVPage";
import NavBarTrainee from "../components/NavBarTrainee";
import Background from "../components/images/bg3.jpg";


class TraineePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      email: ""
    };
  }
  // static email = {email:""};

  render() {

    var bgStyle = {
      width: '100%',
      height: '969px',
      backgroundImage: "url(" + Background + ")",
      backgroundRepeat  : 'no-repeat',
      // backgroundPosition: 'center',
      backgroundSize: "cover",
      color: 'black'
    };

    console.log(this.props.userId);
    return (
      <div className="backgroundTrainee" style={bgStyle}>

      <div className="TraineePage">
        <NavBarTrainee />
        <div>
          <h1>Trainee Dashboard</h1>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>
                  <ProfilePage userId={this.props.userId} />
                </code>
              </Col>

              <Col xs={6} md={4}>
                <Row>
                  <code>
                    <TraineeCVPage userId={this.props.userId} />
                  </code>
                </Row>
                <Row>
                  <CVTable userId={this.props.userId} />
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
      </div>
    );
  }
}

export default TraineePage;
