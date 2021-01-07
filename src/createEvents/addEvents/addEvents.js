import React from "react";
import "./addEvents.css";
import back from "../../assets/image/backSign.svg";
import {  useLocation } from "react-router-dom";

import AddEvent1 from "./addEvent1";
import AddEvent2 from "./addEvent2";
import AddEvent3 from './addEvent3';
import AddEvent4 from './addEvent4';
import AddEvent5 from './addEvent5';

const AddEvents = (props) => {
  const {hash, pathname} = useLocation();
  let pageNo = parseInt(hash.replace('#', ''));

  const openNextForm = () => {
    props.history.push(`${pathname}#${pageNo + 1}`);
  };

  const renderForm = () => {
    pageNo = !isNaN(pageNo) ? pageNo : 1;
    switch (pageNo) {
      case 2:
        return <AddEvent2 />;
      case 3:
        return <AddEvent3 />;
      case 4:
        return <AddEvent4 />;
      case 5:
        return <AddEvent5 />;
      case 1:
      default:
          if(isNaN(parseInt(hash.replace("#", '')))){
          return  props.history.push({pathname, hash : "#1"})
          }
        return <AddEvent1 />;
    }
  };

  return (
    <div className="add_layout">
      <a
        href={`${pageNo > 1 ? "/confrence/add/events#" + (pageNo - 1).toString() : "/confrence"}`}
      >
        <img src={back} alt="black" className="mr-3 f__700" />
        Back
      </a>
      <h1>Add Events</h1>
      {renderForm()}
      <section className="d-flex justify-content-between">
        <p>{pageNo}/5</p>
        {pageNo >= 5 ?
          <button className="create_form_btn">
            Create Event
     </button>
          : <button className="btn next_form_btn" onClick={openNextForm}>
            Next
        </button>}
      </section>
    </div>
  );
};

export default AddEvents;
