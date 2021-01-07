import React from 'react'

const Ticket = () => {
    return (
        <>
            <section className="active-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ticket-categories">
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#4a937b" }}></i>
                                    <span>Conference</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#007bff" }}></i>
                                    <span>Weddings</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#333" }}></i>
                                    <span>Travel</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#fbff00" }}></i>
                                    <span>Cinema</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt2">
                        <div className="twelve columns">
                            <div className="headers">Active tickets</div>

                            <div className="row">
                                <div className="col-md-3">
                                    <select>
                                        <option>All</option>
                                        <option>Conference</option>
                                        <option>Weddings</option>
                                        <option>Cinema</option>
                                        <option>Travel</option>
                                    </select>
                                </div>
                            </div>

                            <br />

                            <div>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="text-align-center" colspan="4">Ticket</th>
                                                <th className="text-align-center" colspan="4">Event</th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th>Code</th>
                                                <th>Price</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Venue</th>
                                                <th>Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#4a937b" }}></i>
                                                </td>
                                                <td>YH78MM</td>
                                                <td>N5,000</td>
                                                <td>20 May, 20</td>
                                                <td>Python Conference</td>
                                                <td>lorem</td>
                                                <td>VI, Lagos</td>
                                                <td>23 May, 20</td>
                                                <td>
                                                    <a href="#">Details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt2 flex justify-center">
                                    <button>Previous</button>
                                    <div className="w2"></div>
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="archived-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ticket-categories">
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#4a937b" }}></i>
                                    <span>Conference</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#007bff" }}></i>
                                    <span>Weddings</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#333" }}></i>
                                    <span>Travel</span>
                                </div>
                                <div>
                                    <i className="fas fa-circle fa-sm" style={{ color: "#fbff00" }}></i>
                                    <span>Cinema</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt2">
                        <div className="twelve columns">
                            <div className="headers">Archived tickets</div>

                            <div className="row">
                                <div className="col-md-3">
                                    <select>
                                        <option>All</option>
                                        <option>Conference</option>
                                        <option>Weddings</option>
                                        <option>Cinema</option>
                                        <option>Travel</option>
                                    </select>
                                </div>
                            </div>

                            <br />

                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="text-center" colspan="4">Ticket</th>
                                            <th className="text-center" colspan="4">Event</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>Code</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Venue</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <i className="fas fa-circle fa-sm" style={{ color: "#4a937b" }}></i>
                                            </td>
                                            <td>YH78MM</td>
                                            <td>N5,000</td>
                                            <td>20 May, 20</td>
                                            <td>Python Conference</td>
                                            <td>lorem</td>
                                            <td>VI, Lagos</td>
                                            <td>23 May, 20</td>
                                            <td>
                                                <a href="#">Details</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt2 flex justify-center">
                                <button>Previous</button>
                                <div className="w2"></div>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Ticket