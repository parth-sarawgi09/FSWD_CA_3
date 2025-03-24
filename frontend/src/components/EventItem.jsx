import React from "react";

const EventItem = ({ event }) => {
  return (
    <div >
      <h2 >{event.title}</h2>
      <p >
        <strong>Date:</strong> {event.date}
      </p>
      <p >{event.description}</p>
    </div>
  );
};

export default EventItem;