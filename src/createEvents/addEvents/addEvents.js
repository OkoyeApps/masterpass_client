import React from "react";
import "./addEvents.css";
import back from "../../assets/image/backSign.svg";
import { useParams, useLocation } from "react-router-dom";

import AddEvent1 from "./addEvent1";
import AddEvent2 from "./addEvent2";
import AddEvent3 from './addEvent3';
import AddEvent4 from './addEvent4';
import AddEvent5 from './addEvent5';

const AddEvents = (props) => {
  console.log("params", useLocation());

  let pageNo = parseInt(useLocation().hash[1]);

  console.log("page", pageNo)

  const openNextForm = () => {
    props.history.push(`/confrence/add/events#${pageNo + 1}`);
  };

  const renderForm = () => {
    if (pageNo === 1) {
      return <AddEvent1/>;
    }
    if (pageNo === 2) {
      return <AddEvent2/>;
    }
    if(pageNo === 3){
      return <AddEvent3/>
    }
    if(pageNo === 4){
      return <AddEvent4/>
    }
    if(pageNo === 5){
      return <AddEvent5/>
    }
  };

  return (
    <div className="add_layout">
      <a
        href={`${pageNo > 1 ? "/confrence/add/events#" +(pageNo-1).toString() : "/confrence"}`}
      >
        <img src={back} alt="black" className="mr-3" />
        back
      </a>
      <h1>Add Events</h1>
      {renderForm()}
      <section className="d-flex justify-content-between">
        <p>{pageNo}/5</p>
       { pageNo >= 5 ?
       <button className="create_form_btn">
       Create Event
     </button>
       :<button className="btn next_form_btn" onClick={openNextForm}>
          Next
        </button>}
      </section>
    </div>
  );
};

export default AddEvents;
