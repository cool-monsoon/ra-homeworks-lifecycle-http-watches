import { useState } from 'react'
import uniqid from "uniqid";
import Clock from "./components/Clock";
import Form from "./components/Form";
import './App.css'

export default function App() {
  const [clocks, setClocks] = useState([]);

  function handleFormSubmit(form) {
    setClocks((prevState) => [...prevState, {
      id: uniqid(),
      name: form.name,
      timezone: form.timezone,
    }]);
  }

  function getClockIndex(id) {
    const index = clocks.findIndex((clock) => clock.id === id);

    return index;
  }

  function handleDeleteClick(id) {
    const index = getClockIndex(id);

    const updatedClocks = [
      ...clocks.slice(0, index),
      ...clocks.slice(index + 1),
    ];

    setClocks(updatedClocks);
  }

  return (
    <div className="container">
      <Form onFormSubmit={handleFormSubmit} />
      <div className="clocks-container">
        {clocks.map((clock) => {
          return (
            <Clock
              key={clock.id}
              id={clock.id}
              name={clock.name}
              timezone={clock.timezone}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </div>
    </div>
  );
}