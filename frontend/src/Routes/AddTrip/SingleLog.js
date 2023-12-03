import React, { useEffect, useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteLogAction, updateLogAction } from "../../actions/logActions";
import ErrorMessage from "../../Components/ErrorMessage";
import Loading from "../../Components/Loading";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

function SingleLog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logUpdate = useSelector((state) => state.logUpdate);
  const { loading, error } = logUpdate;

  const logDelete = useSelector((state) => state.logDelete);
  const { loading: loadingDelete, error: errorDelete } = logDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteLogAction(id));
    }
    navigate("/history");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/logs/${id}`);

      setTitle(data.title);
      setDestination(data.destination);
      setItinerary(data.itinerary);
      setCategory(data.category);
      setBudget(data.budget);
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setDestination("");
    setItinerary("");
    setCategory("");
    setBudget(0);
    setStartDate("");
    setEndDate("");
  };

  const updateHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateLogAction(
        id,
        title,
        destination,
        itinerary,
        category,
        budget,
        startDate,
        endDate
      )
    );
    if (
      !title ||
      !destination ||
      !itinerary ||
      !budget ||
      !category ||
      !startDate ||
      !endDate
    )
      return;

    resetHandler();
    navigate("/history");
  };

  return (
    <MainScreen title="Edit Log">
      <Card>
        <Card.Header>Edit your Log</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="destination"
                placeholder="Enter the destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="itinerary">
              <Form.Label>Itinerary</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the itinerary"
                rows={5}
                value={itinerary}
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
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="budget">
              <Form.Label>Budget</Form.Label>
              <Form.Control
                type="budget"
                placeholder="Enter the Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            {loading && <Loading size={25} />}
            <Button variant="primary" type="submit">
              Update Log
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(id)}
            >
              Delete Log
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleLog;
