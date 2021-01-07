import React from 'react'
import imageIcon from '../assets/image/df.png'
import { modalControl } from '../assets/main'
import DatePicker from '../components/datePickerComp'
import DropifyComp from '../components/dropifyComponent'
import image from '../assets/image/confrencePix.png';



let dropDownIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
</svg>



const WeddingEvents = (props) => {
    let dummyData = [1, 2, 3, 4]
    return (
        <>
            <div className="row">
                <div className="col-md-12 wedding_top_col" style={{ height: "416px" }}>
                    <div className="over_lay d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <span className="myEvents_bold_header">Weddings</span>
                            <div className="confrence_underline"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-7 text-center mx-auto">
                    <p className="confrence_top_writeup  mb-4">
                        Lets help you promote your event. Start by adding your weddings to our datatbase
          </p>
                    <button type="button" className="btn view_added_event_seeAll_btn" onClick={() => { props.history.push("/confrence/add/events#1") }}>Add Events</button>
                </div>
            </div>

            {/* <section className="layout_side_spacing">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center my-5">
                        <h4 className="section_header">
                            Scheduled Events
          </h4>
                        <div className="d-flex align-items-center seeMore_dropDown">
                            <span>See More</span>
                            <div className="ml-1">{dropDownIcon}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        dummyData.map(() => (
                            <div className="col-md-3 mb-5">
                                <div className="card border-0 p-0">
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body bg_confrence_card d-flex">
                                        <div className="d-flex align-items-center  pr-2 justify-items-center">
                                            <div className="text-center">
                                                <span className="date_">Nov</span><br />14
                    </div>
                                        </div>
                                        <div>
                                            <ul className="p-0 mx-0 my-2" style={{ listStyleType: "none" }}>
                                                <li className="mb-1 confrence_topic">How to make profit in 5 days</li>
                                                <li className="mb-1 confrence_title">Speakers: Emma Okoye, Bosah Arthur</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section> */}

            <section className="layout_side_spacing mb-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center my-5">
                        <h4 className="section_header">
                        Upcoming Events
          </h4>
                        <div className="d-flex align-items-center seeMore_dropDown">
                            <span>Dates</span>
                            <div className="ml-1">{dropDownIcon}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        dummyData.map(() => (
                            <div className="col-md-3 mb-5">
                                <div className="card border-0 p-0">
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body bg_confrence_card d-flex">
                                        <div className="d-flex align-items-center  pr-3 justify-items-center">
                                            <div className="text-center">
                                                <span className="date_">Nov</span><br />14
                    </div>
                                        </div>
                                        <div>
                                            <ul className="p-0 mx-0 my-2" style={{ listStyleType: "none" }}>
                                                {/* <li className="mb-1 confrence_name">Business Conference</li> */}
                                                <li className="mb-1 confrence_topic">How to make profit in 5 days</li>
                                                <li className="mb-1 confrence_title">Speakers: Emma Okoye, Bosah Arthur</li>
                                                {/* <li className="mb-1 confrence_applicants_count">20 Attendees</li> */}
                                            </ul>
                                        </div>
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
        </>
    )
}

export default WeddingEvents