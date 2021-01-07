import React from 'react';
import './eventDetails.css'

const EventDetail = () => {
    return (
        <section>
    <div className="container">
      <div className="row mt5">
        <div className="twelve columns">
          <div className="event-details-top">
            <div className="event-details-banner event-details-banner_bg_image" ></div>
            <div>
              <div className="headers">Eve weds Adam</div>
              <div className="sub-header">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repudiandae aliquam totam, quam
                tempore laboriosam iste reprehenderit eum, dolores vero provident eos vitae fugit suscipit officiis
                voluptatum. Aut, rem eius.</div>
              <div className="row mt2">
                <div className="four columns">
                  <div>May 20, 2020</div>
                  <div className="font14 bold">Start date</div>
                </div>
                <div className="four columns">
                  <div>Jul 12, 2020</div>
                  <div className="font14 bold">End date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <div className="other-event-details-1">
            <div className="card">
              <div>Ticket Category</div>
              <table>
                <tr>
                  <td>
                    <div>Regular</div>
                  </td>
                  <td>
                    <div>Free</div>
                  </td>
                  <td>
                    <div>Batch</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="card">
              <div>Tickets</div>
              <table>
                <tr>
                  <td>
                    <div>Regular</div>
                    <div className="font14 bold">1,000 NGN</div>
                  </td>
                  <td>
                    <div>10</div>
                    <div className="font14 bold">Available</div>
                  </td>
                  <td>
                    <div>150</div>
                    <div className="font14 bold">Total</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>VIP</div>
                    <div className="font14 bold">10,000 NGN</div>
                  </td>
                  <td>
                    <div>2</div>
                    <div className="font14 bold">Available</div>
                  </td>
                  <td>
                    <div>20</div>
                    <div className="font14 bold">Total</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="card">
              <div>Event Items</div>
              <table>
                <tr>
                  <td>
                    <div className="img-placeholder"></div>
                  </td>
                  <td>Books</td>
                  <td>300 <span className="font14 bold">Qty</span></td>
                  <td>1,500 <span className="font14 bold">NGN</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="img-placeholder"></div>
                  </td>
                  <td>Aseobi</td>
                  <td>50 <span className="font14 bold">Qty</span></td>
                  <td>10,000 <span className="font14 bold">NGN</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="img-placeholder"></div>
                  </td>
                  <td>Snacks</td>
                  <td>1,000 <span className="font14 bold">Qty</span></td>
                  <td>1,000 <span className="font14 bold">NGN</span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <div className="other-event-details-2">
            <div className="card">
              <div>Event Schedule</div>
              <table>
                <tr>
                  <td>
                    <div>Introduction</div>
                    <div className="font14">Lorem ipsum, dolor sit amet consectetur elit...</div>
                  </td>
                  <td>
                    <div>12:30</div>
                    <div className="font14 bold">Start</div>
                  </td>
                  <td>
                    <div>14:30</div>
                    <div className="font14 bold">End</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="card">
              <div>Event Performers</div>
              <div className="speaker">
                <div></div>
                <div>
                  <div>Emeka Jeremiah</div>
                  <div className="font14 bold">Head Organizer</div>
                  <div>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="speaker">
                <div></div>
                <div>
                  <div>Jeremiah Nweke</div>
                  <div className="font14 bold">Guest Speaker</div>
                  <div>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div>Event Venue and map</div>
              <div id="mapid"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <div className="other-event-details-3">
            <div className="card">
              <div className="img-gallery">
                <div className="img-gallery-item"
                  style={{backgroundImage:"url(https://images.unsplash.com/photo-1593542091381-8579f854507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)"}}>
                  <div className="item"></div>
                </div>
                <div className="img-gallery-item"
                  style={{backgroundImage:"url(https://images.unsplash.com/photo-1594022348898-becca3809dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"}}>
                  <div className="item"></div>
                </div>
                <div className="img-gallery-item"
                  style={{backgroundImage:"url(https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)"}}>
                  <div className="item"></div>
                </div>
                <div className="img-gallery-item"
                  style={{backgroundImage:"url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"}}>
                  <div className="item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="six columns">
          <div className="card mt5">
            <div className="img-gallery">
              <div className="img-gallery-item"
                style={{backgroundImage:"url(https://images.unsplash.com/photo-1593542091381-8579f854507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)"}}>
                <div className="item"></div>
              </div>
              <div className="img-gallery-item"
                style={{backgroundImage:"url(https://images.unsplash.com/photo-1594022348898-becca3809dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"}}>
                <div className="item"></div>
              </div>
              <div className="img-gallery-item"
                style={{backgroundImage:"url(https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)"}}>
                <div className="item"></div>
              </div>
              <div className="img-gallery-item"
                style={{backgroundImage:"url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"}}>
                <div className="item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{height:"50px"}}></div>
  </section>
    )
}

export default EventDetail