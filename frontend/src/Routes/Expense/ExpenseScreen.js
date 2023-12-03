
import "../../Components/Footer/Footer.css";
import "./Expense.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Expense() {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    // Retrieve destinations from local storage on component mount
    const storedDestinations = JSON.parse(localStorage.getItem("destinations"));
    if (storedDestinations) {
      setDestinations(storedDestinations);
    }
  }, []);

  useEffect(() => {
    // Save destinations to local storage whenever it changes
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

  const handleAddDestination = () => {
    if (currentDestination.trim() !== "") {
      const newDestination = {
        name: currentDestination,
        expenses: [],
      };

      setDestinations([...destinations, newDestination]);
      setCurrentDestination("");
    }
  };

  const handleDestinationClick = (index) => {
    setSelectedDestination(index);
  };

  const handleAddExpense = () => {
    if (
      amount.trim() !== "" &&
      title.trim() !== "" &&
      category.trim() !== "" &&
      selectedDestination !== null
    ) {
      const newExpense = {
        amount,
        title,
        category,
      };

      const updatedDestinations = [...destinations];
      updatedDestinations[selectedDestination].expenses.push(newExpense);

      setDestinations(updatedDestinations);
      setAmount("");
      setTitle("");
      setCategory("");
    }
  };

  const handleDeleteDestination = (index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations.splice(index, 1);
    setDestinations(updatedDestinations);
    setSelectedDestination(null); // Reset selected destination if the deleted one was selected
  };

  const handleDeleteExpense = (destIndex, expenseIndex) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[destIndex].expenses.splice(expenseIndex, 1);
    setDestinations(updatedDestinations);
  };

  const calculateTotalAmount = (expenses) => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  return (
    <>
    <div className="background-container">
      <Header />

      <div className="container1">
        <div className="add-destination-container">
          <Form>
            <Form.Group controlId="destination">
              <Form.Label>Add Destination</Form.Label>
              <Form.Control
                type="text"
                value={currentDestination}
                onChange={(e) => setCurrentDestination(e.target.value)}
                placeholder="Enter destination name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddDestination}>
              Add Destination
            </Button>
          </Form>
        </div>

        <div className="destinations-container">
          <h3>Destinations</h3>
          {destinations.map((destination, index) => (
            <Card
              key={index}
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                position: "relative",
              }}
              onClick={() => handleDestinationClick(index)}
            >
              <Card.Body>
                <span>{destination.name}</span>
                <Button
                  variant="danger"
                  size="sm"
                  className="delete-button"
                  onClick={() => handleDeleteDestination(index)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {selectedDestination !== null && (
          <div className="expense-list-container">
            <h3>Expense List for {destinations[selectedDestination].name}</h3>
            {destinations[selectedDestination].expenses.map((expense, index) => (
              <Card key={index} style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <p>Amount: ₹{expense.amount}</p>
                  <p>Title: {expense.title}</p>
                  <p>Category: {expense.category}</p>
                  <Button
                    variant="danger"
                    size="sm"
                    className="delete-button"
                    onClick={() => handleDeleteExpense(selectedDestination, index)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
            <Card style={{ marginTop: "10px" }}>
              <Card.Body>
                <p>Total Amount: ₹{calculateTotalAmount(destinations[selectedDestination].expenses)}</p>
              </Card.Body>
            </Card>
            {/* Add Expense form moved here */}
            <Form style={{ marginTop: "10px" }}>
              <Form.Group controlId="amount">
                <Form.Label>Amount in ₹</Form.Label>
                <Form.Control
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </Form.Group>
              <Form.Group controlId="title">
                <Form.Label>Expense Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter expense title"
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddExpense}>
                Add Expense
              </Button>
            </Form>
          </div>
        )}
      </div>

      <Footer />
      </div>
    </>
  );
}

export default Expense;
