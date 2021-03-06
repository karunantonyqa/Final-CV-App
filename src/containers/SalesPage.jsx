import React, { Component } from "react";
import NavbarFeatures from "./NavBarFeatures";
import { Table, Grid, Row, Col, Clearfix } from "react-bootstrap";
import TraineeTable from "../components/TraineeTable";
import ProfilePage from "../containers/ProfilePage";
import CvTableSales from "../components/CvTableSales";
import NavBarTrainer from "../components/NavBarTrainer";
import Background from "../components/images/bg3.jpg";


class SalesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPeople: [],
      selectedId: "",
      searchText: ""
    };
  }
  // componentDidMount() {
  //   let request = new XMLHttpRequest();
  //   request.open("GET", "http://localhost:8090/api/people");
  //   request.setRequestHeader("Content-Type", "application/json");
  //   request.setRequestHeader("Access-Control-Allow-Origin", "*");
  //   request.responseType = "json";
  //   request.send();

  //   request.onload = () => {
  //     this.setState({ allPeople: request.response });
  //   };
  // }

  handleClick = e => {
    let email = e.target.className;
    let request = new XMLHttpRequest();
    request.open("GET", "http://192.168.1.117:8090/api/people");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.responseType = "json";
    request.send();

    request.onload = () => {
      for (var i = 0; i < request.response.length; i++) {
        if (request.response[i].email == email) {
          this.setState({ selectedId: request.response[i].id });
        }
      }
    };
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
    console.log(this.state.searchText);
  };

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

    var myId = "" + this.state.selectedId;
    return (
      <div className="backgroundTrainee" style={bgStyle}>

      <div className="SalesPage">
        <NavBarTrainer />
        <div>
          <h1 color="red" class="display-3">
            Sales Dashboard
          </h1>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                <ProfilePage userId={this.state.selectedId} />
              </code>
            </Col>

            <Col xs={6} md={4}>
              <Row>
                <Table bordered hover striped condensed>
                  <thead>
                    <th> Search </th>
                    <th>
                      <input
                        placeholder="Input Name Or Email..."
                        id="search"
                        type="text"
                        onChange={this.handleChange}
                      />
                    </th>
                  </thead>
                </Table>
              </Row>
              <Row>
                <code>
                  <TraineeTable
                    onClick={this.handleClick}
                    searchText={this.state.searchText}
                  />
                </code>
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <code>
                <CvTableSales userId={myId} />
              </code>
            </Col>
          </Row>
        </Grid>
        ;
      </div>
      </div>
    );
  }
}

export default SalesPage;
