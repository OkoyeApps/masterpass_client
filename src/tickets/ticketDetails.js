import React from 'react'
import { modalControl } from '../assets/main'
import dfImage from '../assets/image/df.png';
import './tickets.css'
import DatePicker from '../components/datePickerComp';

const TicketDetails = () => {
  return (
    <section>
      <div className="container">
        <div className="row mt5">
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col">
                  <div className="font32 semi-bold">Ticket Details</div>
                </div>
              </div>
              <div className="row mt2">
                <div className="col-md-4 mt1">
                  <div className="font16 mb1">Ticket Code</div>
                  <div className="font24">#3434534</div>
                </div>
                <div className="col-md-4 mt1">
                  <div className="font16 mb1">Ticket Category</div>
                  <div className="font24">Free</div>
                </div>
                <div className="col-md-4 mt1">
                  <div className="font16 mb1">Venue</div>
                  <div className="flex align-center">
                    <img src={dfImage} className="rounded-sm" alt="" />
                    <div className="w2"></div>
                    <div>
                      <div className="font24">Transcorp Event Center</div>
                      <div>3 Cally drive, Emene, Enugu State</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row mt5">
                <div className="col">
                  <div className="flex">
                    <div>
                      <button className="simple-button"
                        onClick={() => { modalControl('reschedule-event-ticket-use') }}>Reschedule</button>

                      <div id="reschedule-event-ticket-use" className="modal">
                        <div className="modal-body">
                          <div>
                            <div className="modal-content">
                              <div className="flex justify-space-between">
                                <div></div>
                                <div className="modal-title">Reschedule Ticket Usage</div>
                                <div className="close-modal" id="close-modal">
                                  <span onClick={() => { modalControl('reschedule-event-ticket-use') }}>&#10005;</span>
                                </div>
                              </div>
                              <div className="mt2">
                                <div>
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <div className="font16">Current dates</div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="font14">From</div>
                                      <div>21 Jul, 20</div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="font14">To</div>
                                      <div>21 Jul, 20</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="input-wrapper mt2 mb2">
                                  <DatePicker id={'event-ticket-usage-range'} placeHolder={'Select new range'} typeOfRange={'event-ticket-usage-range'} />
                                </div>
                                <div className="input-wrapper mt5 mb2">
                                  <DatePicker id={'event-ticket-date'} placeHolder={'Select date'} />
                                </div>
                                <div className="input-wrapper mt2 mb2">
                                  <DatePicker id={'event-ticket-time'} placeHolder={'Select time'} typeOfTime={'event-ticket-time'} />
                                </div>
                                <div>
                                  <button className="button">Reschedule</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w1"></div>
                    <div>
                      <button className="simple-button" onClick={() => { modalControl('tranfer-ticket') }}>Transfer ticket</button>

                      <div id="tranfer-ticket" className="modal">
                        <div className="modal-body">
                          <div>
                            <div className="modal-content">
                              <div className="flex justify-space-between">
                                <div></div>
                                <div className="modal-title">Transfer Ticket</div>
                                <div className="close-modal" id="close-modal">
                                  <span onClick={() => { modalControl('tranfer-ticket') }}>&#10005;</span>
                                </div>
                              </div>
                              <div className="mt5">
                                <div className="input-wrapper mt2 mb2">
                                  <input type="text" placeholder="Email of recipient" />
                                </div>
                                <div>
                                  <button className="button">Transfer</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt5 mb2">
          <div className="col">
            <div className="card">
              <div className="event-summary-ticket">
                <div className="event_summary_bg_image" ></div>
                <div>
                  <div className="font24 semi-bold">Ada weds Adam (#reference code)</div>
                  <div className="font16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos error
                  aspernatur quis, fugit
                      corrupti sint mollitia quaerat.</div>

                  <div className="row mt2">
                    <div className="col-6 col-md-3">
                      <div className="font16">Tickets available</div>
                      <div className="semi-bold">53</div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="font16">Total Tickets</div>
                      <div className="semi-bold">500</div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="font16">Start date</div>
                      <div className="semi-bold">21 Jul, 20</div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="font16">End date</div>
                      <div className="semi-bold">21 Jul, 20</div>
                    </div>
                  </div>

                  <div className="mt2">
                    <div className="font16">Venue</div>
                    <div className="semi-bold">Transcorp Hilton, Abuja</div>
                  </div>

                  <div className="mt2">
                    <div className="font16">Description</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam maxime doloribus
                    nulla
                    voluptates iusto minus at nam illum repellat qui doloremque facilis quis expedita, obcaecati debitis
                        inventore. Laborum, minima.</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt5">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                  <div>
                    <button className="simple-button" onClick={() => { modalControl('write-review') }}>Write review</button>

                    <div id="write-review" className="modal">
                      <div className="modal-body">
                        <div>
                          <div className="modal-content">
                            <div className="flex justify-space-between">
                              <div></div>
                              <div className="modal-title">Transfer Ticket</div>
                              <div className="close-modal" id="close-modal">
                                <span onClick={() => { modalControl('write-review') }}>&#10005;</span>
                              </div>
                            </div>
                            <div className="mt2">
                              <div className="input-wrapper">
                                <select>
                                  <option>Choose star rating...</option>
                                  <option value="1">1 Star</option>
                                  <option value="2">2 Stars</option>
                                  <option value="3">3 Stars</option>
                                  <option value="4">4 Stars</option>
                                  <option value="5">5 Stars</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <div className="input-wrapper mt2 mb2">
                                <textarea placeholder="Write your review"></textarea>
                              </div>
                              <div>
                                <button className="button">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt2">
                    <div className="flex justify-center mb1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laborum! Magnam perspiciatis vitae
                    accusamus iure soluta consequatur ipsum. Esse atque necessitatibus magnam aut itaque quasi deserunt
                        est, suscipit veniam unde.</div>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TicketDetails