import React from 'react';
import weddingPix from '../assets/image/weddingPix.png';
import confrencePix from '../assets/image/confrencePix.png';
import './events.css'

const Events = () => {
    return (
        <>
        <div className="row layout_side_spacing my-5">
            <div className="col-md-7">
                <h1 className="events_h1_writeup">
                    We are your guide <br/>
                    to the hottest events
                    happening in Nigeria
                </h1>
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-center">
                <button type="button" className="btn events_add_event_btn">Add Events</button>
            </div>
            <div className="col-md-7">
                <p className="events_p_writeup">
                    Explore to know more about your scheduledmevents, as
                    well as your booked events <span className="linked_">Here</span> inorder to be updated and
                    keep track of your events.
                </p>
            </div>
        </div>
        <div className="row layout_side_spacing">
            <div className="col-md-6">
                <img src={confrencePix} alt="..." width="100%" className="events_col_pix" />
                <div className="events_col_writeup">Confrences</div>
            </div>
            <div className="col-md-6">
                <img src={weddingPix} alt="..." width="100%" className="events_col_pix" />
                <div className="events_col_writeup">Weddings</div>
            </div>
        </div>
        </>
    )
}

export default Events