import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <div >
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;