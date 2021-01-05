import React from 'react';
import image from '../assets/image/confrencePix.png';
import videoSample from '../assets/image/videoplaySample.png';
import bookSample from '../assets/image/materialBook.png';
import './events.css';


const ViewAddedEvents = () => {
    let dummyData = [1, 2, 3, 4]
    let dummyTicketData = [1, 2, 3]
    return (
        <>
            <div className="row">
                <div className="col-md-12 confrence_top_col" style={{ height: "576px" }}>
                    <div className="over_lay_slected_Company layout_side_spacing">
                        <div className="row h-100">
                            <div className="col-md-7"></div>
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <span>Business Conference</span>
                                    <h2 className="mb-5">
                                        How to make profit in 5 days
                                    </h2>
                                    <button type="button" className="btn view_added_event_action_btn">Get Tickets</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="layout_side_spacing py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="events_h1_writeup">
                            We connect founders
                            from around the globe
                            to share the latest
                        </h1>
                    </div>
                </div>
            </section>
            <section className="layout_side_spacing py-5">
                <div className="row">
                    {
                        dummyData.map(() => (
                            <div className="col-md-3 px-4">
                                <div className="card border-0 p-0">
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <div className="selected_confrence_card_name">Anna Lee</div>
                                        <div className="selected_confrence_card_duty mb-3">Guest Speaker</div>
                                        <div className="selected_confrence_card_profile mb-1">Founder of ABC Limited</div>
                                        <div className="d-flex justify-content-center social_media_card_section">
                                            <span className="d-flex align-items-center mx-1"><i class="fab fa-instagram"></i>@anna_lee</span>
                                            <span className="d-flex align-items-center mx-1"><i class="fab fa-twitter"></i>@anna_lee</span>
                                            <span className="d-flex align-items-center mx-1"><i class="fab fa-facebook-f"></i>@anna_lee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="layout_side_spacing py-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={videoSample} alt="..." className="video_section" />
                    </div>
                    <div className="col-md-7 about_selected_confrence">
                        <p className="m-0">
                            This business conference exposes you to secrets in business you should
                            know as an Entrepreneur or business owner
                        </p>
                        <div className="d-flex">
                            <span className="mr-4">
                                <b>Venue:</b>
                            </span>
                            <span>
                                Boardroom, Tenece Building.
                                @ Kilometer 17, centenary city Enugu - Port Harcourt Express Road
                                Enugu State.
                            </span>
                        </div>
                        <div className="d-flex">
                            <span className="mr-4">
                                <b> Date:</b>
                            </span>
                            <span>
                                November 14, 2020.
                            </span>
                        </div>
                        <div className="d-flex">
                            <span className="mr-4">
                                <b>Time:</b>
                            </span>
                            <span>
                                10am
                            </span>
                        </div>
                        <div className="d-flex">
                            <span className="mr-4">
                                <b> Attendees:</b>
                            </span>
                            <span>
                                20 people Registered
                            </span>
                        </div>
                        <p className="note_for_selected_confrenec m-0">
                            Note: Business ideas will be acquired, Business books, journals, and articles will
                            be made available at the conference venue.
                        </p>
                    </div>
                </div>
            </section>
            <section className="layout_side_spacing py-5">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h4 className="section_header">Available Materials</h4>
                    </div>
                </div>
                <div className="row">
                    {
                        dummyData.map(() => (
                            <div className="col-md-6 mb-5">
                                <div className="card p-5">
                                    <div className="d-flex">
                                        <img src={bookSample} alt="..." className="available_material_img mr-5" />
                                        <ul className="p-0 m-0 about_selected_confrence" style={{ listStyleType: "none" }}>
                                            <li className="mb-1 "><b>The Intelligent Investor by Bejamin Graham</b></li>
                                            <li className="mb-1 ">A business book that exposes you to the best way to invest wisely</li>
                                            <li className="mb-1 ">
                                                <span><b>N 3000</b></span>
                                                <span className="available_book_count ml-2">(5 more books remaining)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-right  ">
                                        <span className="linked_">Purchase</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn view_added_event_seeAll_btn">See all</button>
                    </div>
                </div>
            </section>
            <section className="layout_side_spacing py-5">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h4 className="section_header">Tickets</h4>
                    </div>
                </div>
                <div className="row">
                    {
                        dummyTicketData.map((x) => (
                            <div className="col-md-4 px-5">
                                <div className="card border-0 p-0 round-0 ticket_card">
                                    <div className="view_event_ticket_card_type text-center py-4">
                                        <span>Regular</span>
                                        <div>N 1500</div>
                                    </div>
                                    <div className="ticket_card_list_section p-4">
                                        <ul className="p-0 m-0 ticket_card_list" style={{ listStyleType: "none" }}>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Congregation Seats</li>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Breakfast</li>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Breakfast</li>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Breakfast</li>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Breakfast</li>
                                            <li className="mb-2"> <i class="fas fa-circle mr-2"></i> Lunch</li>
                                        </ul>
                                    </div>
                                    <div className="ticket_btn_section text-center py-4">
                                        {
                                            x===1?
                                            <button type="button" className="btn view_added_event_seeAll_btn">Buy Ticket</button>
                                            :
                                            <button type="button" disabled className="btn view_added_event_seeAll_btn">Sold Out</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <p className="note_ mt-5">Note: Already bought tickets can be resold <span className="linked_">Here</span></p>
            </section>
        </>
    )
}

export default ViewAddedEvents