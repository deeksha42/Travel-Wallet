import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import MainScreen from "../../Components/MainScreen/MainScreen";
import Accordion from "react-bootstrap/Accordion";
import "./History.css";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteLogAction, listLogs } from "../../actions/logActions";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const History = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logList = useSelector((state) => state.logList);
  const { loading, logs, error } = logList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logCreate = useSelector((state) => state.logCreate);
  const { success: successCreate } = logCreate;

  const logUpdate = useSelector((state) => state.logUpdate);
  const { success: successUpdate } = logUpdate;

  const logDelete = useSelector((state) => state.logDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = logDelete;

  // Function to delete notes
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteLogAction(id));
      // Implement your delete logic here
    }
  };

  console.log(logs);

  useEffect(() => {
    console.log("About to dispatch LOG_LIST_REQUEST");
    dispatch(listLogs());

    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <>
      <Header />
      <MainScreen title={`Dive back in ${userInfo.name}`}>
        <div className="new-trip-link">
          <a href="/create" className="new-trip">
            Add Trip
          </a>
        </div>
        <Accordion defaultActiveKey="0" alwaysOpen>
          {errorDelete && (
            <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
          )}
          {loadingDelete && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          {logs?.reverse().map((log, index) => (
            <Accordion.Item key={log._id} eventKey={String(index)}>
              <Card style={{ margin: 10 }}>
                <Accordion.Header>{log.title}</Accordion.Header>
                <Accordion.Body>
                  <h4>
                    <Badge pill bg="light" text="dark">
                      Category - {log.category}
                    </Badge>
                  </h4>
                  <p>
                    <strong>Title:</strong> {log.title}
                  </p>
                  <p>
                    <strong>Destination:</strong> {log.destination}
                  </p>
                  <p>
                    <strong>Itinerary:</strong>
                    <br />
                    <ReactMarkdown>{log.itinerary}</ReactMarkdown>
                  </p>
                  <p>
                    <strong>Budget:</strong> ₹{log.budget}
                  </p>
                  <p>
                    <strong>Start Date:</strong>{" "}
                    {new Date(log.startDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>End Date:</strong>{" "}
                    {new Date(log.endDate).toLocaleDateString()}
                  </p>
                  <blockquote className="blockquote mb-0">
                    <p>{log.content}</p>
                    <footer className="blockquote-footer">
                      Created on {log.createdAt.substring(0, 10)}
                    </footer>
                  </blockquote>
                  <Link to={`/logs/${log._id}`} style={{ margin: 5 }}>
                    <Button variant="outline-info">Edit</Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteHandler(log._id)}
                    style={{ margin: 5 }}
                  >
                    Delete
                  </Button>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          ))}
        </Accordion>
      </MainScreen>
      <Footer />
    </>
  );
};

export default History;
