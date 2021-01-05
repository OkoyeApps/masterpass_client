import React, { useEffect } from 'react'
import { smallMenuButton, drawChart } from '../assets/main'
import mplogo from '../assets/image/mp.jpeg'


const DashBoard = () => {

    useEffect(() => {
        drawChart()
    }, [])
    return (
        <div>
            <smallmenu id="small-menu" className="close">
                <div>
                    <div className="menu-sm">
                        <img src="../masta.jpeg" alt="" width="100px" />
                        <a onClick={smallMenuButton} className="cursor-pointer">
                            <i className="fas fa-times"></i>
                        </a>
                    </div>
                    <br />
                    <div className="menu-sm-links">
                        <a href="/">Home</a>
                        <a href="/">Events</a>
                        <a href="/">Tickets</a>
                        <a href="/">Create Event</a>
                        <a href="/">Locations</a>
                        <a href="/">Report</a>
                    </div>
                </div>
            </smallmenu>
            <header>
                <div>
                    <div className="logo-search">
                        <div>
                            <img src={mplogo} alt="" width="30px" />
                        </div>
                        {/* <!-- <div className="hide-small">
          <div>
            <div>
              <i className="fas fa-search"></i>
            </div>
            <div style="width: 10px;"></div>
            <div>
              <input type="text"/>
            </div>
          </div>
        </div> --> */}
                    </div>
                    <div className="page-links hide-small">
                        <a className="active" href="/">Home</a>
                        <a href="/">Events</a>
                        <a href="/">Tickets</a>
                        <a href="/">Create Event</a>
                        <a href="/">Locations</a>
                        <a href="/">Report</a>
                    </div>
                    <div className="profile">
                        <div></div>
                        <div className="hide-large profile-menu cursor-pointer" onClick={smallMenuButton}></div>
                        <div className="hide-small profile-menu"></div>
                    </div>
                </div>
            </header>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="six columns">
                            <div className="card">
                                <div></div>
                                <canvas id="last-week-this-week"></canvas>
                            </div>
                        </div>
                        <div className="six columns">
                            <div className="card">
                                <div></div>
                                <canvas id="bought-category-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="three columns">
                            <div className="card">
                                <div className="summary-card">
                                    <div>
                                        <div className="bold font24">107</div>
                                        <div className="font16">Total Tickets Sold</div>
                                    </div>
                                    <div>
                                        <i className="fas fa-coins fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three columns">
                            <div className="card">
                                <div className="summary-card">
                                    <div>
                                        <div className="bold font24">22</div>
                                        <div className="font16">Total Tickets Bought</div>
                                    </div>
                                    <div>
                                        <i className="fas fa-wallet fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three columns">
                            <div className="card">
                                <div className="summary-card">
                                    <div>
                                        <div className="bold font24">5</div>
                                        <div className="font16">Total Events Created</div>
                                    </div>
                                    <div>
                                        <i className="far fa-calendar-alt fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three columns">
                            <div className="card">
                                <div className="summary-card">
                                    <div>
                                        <div className="bold font24">23,000</div>
                                        <div className="font16">All Tickets Transfered</div>
                                    </div>
                                    <div>
                                        <i className="far fa-list-alt fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="front-three">
                                <div>
                                    <div className="card">
                                        <div className="bold font24">Recent Sales</div>
                                        <table>
                                            <thead>
                                                <tr className="font14">
                                                    <th>Customer</th>
                                                    <th>Qty</th>
                                                    <th>Unit price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Nnamani Ugochukwu</td>
                                                    <td>2</td>
                                                    <td>1,000</td>
                                                    <td>2,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Andry Shevchenko</td>
                                                    <td>1</td>
                                                    <td>1,000</td>
                                                    <td>1,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div>
                                    <div className="card">
                                        <div>
                                            <div>Total money realized</div>
                                            <div className="bold font24">&#8358;90,630</div>
                                        </div>
                                        <br />
                                        <canvas id="horizontal_chart"></canvas>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="font24 bold">Upcoming Events</div>
                                        <table style={{ width: "100%" }}>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#3e65b1" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Burna Boy Concert</div>
                                                        <div className="font14 bold">20th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#4a937b" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Wedding Anniversary Celebration</div>
                                                        <div className="font14 bold">5th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#3e65b1" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Buhari Times? If you like sleep</div>
                                                        <div className="font14 bold">20th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="twelve columns">
                            <div className="front-two">
                                <div>
                                    <div className="card">
                                        <div className="font24 bold">Recent Events attended</div>
                                        <table style={{ width: "100%" }}>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#f00" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Burna Boy Concert</div>
                                                        <div className="font14 bold">20th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#f00" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Wedding Anniversary Celebration</div>
                                                        <div className="font14 bold">5th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fas fa-circle fa-sm" style={{ color: "#f00" }}></i>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div>Buhari Times? If you like sleep</div>
                                                        <div className="font14 bold">20th June, 20</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="font24 bold">Recent Ticket Transfers</div>
                                        <table style={{ width: "100%" }}>
                                            <thead>
                                                <tr className="font14">
                                                    <th>Ticket Name</th>
                                                    <th>New Ticket Owner</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Highlife music concert</td>
                                                    <td>James Reinhard</td>
                                                    <td>11 Jun, 20</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <div></div>
            </footer>
        </div>
    )
}

export default DashBoard