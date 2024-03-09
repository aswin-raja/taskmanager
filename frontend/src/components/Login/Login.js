import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import LoginStyled from "./LoginStyled";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Login() {
  const [newaccount, setNewAccount] = useState(false);

  const createAccountClickHandler = () => {
    setNewAccount(!newaccount);
  };

  return (
    <LoginStyled>
      <Container fluid className="main-container">
        <Row>
          <Col xs={12} xl={6} className="textcardmain">
            <div className="textcard">
              <p className="textheader">
                <AssignmentTurnedInIcon className="taskicon" /> Task Manager
                Application
              </p>
              <Row>
                <p className="textcardheader">
                  The key is not to prioritize what's on your schedule,
                </p>
              </Row>
              <Row>
                <span className="textcardsubheader">
                  {" "}
                  but to schedule your priorities.
                </span>
              </Row>
              <Row>
                <p className="justified-text">
                  A task manager application is a powerful digital tool designed
                  to streamline and enhance productivity by efficiently
                  organizing and prioritizing tasks and activities. With the
                  ability to create, categorize, and assign tasks, it provides
                  individuals and teams a structured way to manage their
                  workloads. Users can set due dates, add detailed descriptions,
                  and even collaborate with colleagues, fostering effective
                  communication and accountability. Task manager apps often come
                  with reminders and notifications, ensuring that important
                  deadlines are met. Whether used for personal organization or
                  team coordination, these applications play a crucial role in
                  helping users stay on top of their responsibilities, boost
                  efficiency, and achieve their goals.
                </p>
              </Row>
            </div>
          </Col>
          <Col xs={12} xl={6} className="loginmain">
            <div className="logincard">
              <Row className="loginheaderrow">
                <span className="cardheadertext">
                  {newaccount ? "USER REGISTRATION" : "USER LOGIN"}
                </span>
              </Row>
              <form>
                {newaccount && (
                  <TextField
                    id="fullname"
                    label="Full Name"
                    variant="outlined"
                    className="textfield"
                    fullWidth
                  />
                )}
                <TextField
                  id="email"
                  label="E-Mail"
                  variant="outlined"
                  color="primary"
                  className="textfield"
                  fullWidth
                />
                <Row className="password">
                  <Col xs={12} md={newaccount ? 6 : 12}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      className="textfield"
                      fullWidth
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    {newaccount && (
                      <TextField
                        id="confirmpassword"
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        className="textfield"
                        fullWidth
                      />
                    )}
                  </Col>
                </Row>
                <Row className="subtextrow ">
                  <Col xs={6} md={newaccount ? 12 : 6}>
                    <span
                      className="subtext"
                      onClick={createAccountClickHandler}
                    >
                      {newaccount
                        ? "Login to Exisiting Account"
                        : "Create New Account"}
                    </span>
                  </Col>
                  <Col xs={6} md={6} className="subtext">
                    <span>{!newaccount && "Forgot Password"}</span>
                  </Col>
                </Row>
                <button className="submitbutton" type="submit">
                  {newaccount ? "REGISTER" : "LOGIN"}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </LoginStyled>
  );
}

export default Login;
