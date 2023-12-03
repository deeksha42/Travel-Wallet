import React, { useEffect, useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createLogAction } from "../../actions/logActions";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function AddTrip() {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logCreate = useSelector((state) => state.logCreate);
  const { loading, error, log } = logCreate;

  console.log(log);

  const resetHandler = () => {
    setTitle("");
    setDestination("");
    setItinerary("");
    setCategory("");
    setBudget(0);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createLogAction(
        title,
        destination,
        category,
        itinerary,
        budget,
        startDate,
        endDate
      )
    );
    if (!title || !destination || !itinerary || !category || !budget) return;

    resetHandler();
    navigate("/history");
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <MainScreen title="Plan New Trip">
        <Card>
          <Card.Header>Create a new log</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  value={title}
                  placeholder="Enter the title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="destination">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="destination"
                  value={destination}
                  placeholder="Enter the destination"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="itinerary">
                <Form.Label>Itinerary</Form.Label>
                <Form.Control
                  as="textarea"
                  value={itinerary}
                  placeholder="Enter the itinerary"
                  rows={4}
                  onChange={(e) => setItinerary(e.target.value)}
                />
              </Form.Group>
              {itinerary && (
                <Card>
                  <Card.Header>Itinerary Preview</Card.Header>
                  <Card.Body>
                    <ReactMarkdown>{itinerary}</ReactMarkdown>
                  </Card.Body>
                </Card>
              )}

              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="category"
                  value={category}
                  placeholder="Enter the Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="budget">
                <Form.Label>Budget</Form.Label>
                <Form.Control
                  type="budget"
                  value={budget}
                  placeholder="Enter the Budget"
                  onChange={(e) => setBudget(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="startDate">
                <Form.Label style={{ margin: "10px" }}>Start Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  style={{ textAlign: "center" }}
                />
              </Form.Group>

              <Form.Group controlId="endDate">
                <Form.Label style={{ margin: "10px" }}>End Date</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  style={{ textAlign: "center" }}
                />
              </Form.Group>

              {loading && <Loading size={50} />}
              <Button type="submit" variant="primary" style={{ margin: "5px" }}>
                Create Log
              </Button>
              <Button
                className="mx-2"
                onClick={resetHandler}
                variant="danger"
                style={{ margin: "5px" }}
              >
                Reset Fields
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </MainScreen>
      <Footer />
    </>
  );
}

export default AddTrip;
