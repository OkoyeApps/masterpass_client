import React from 'react'
import { Link } from 'react-router-dom'

const CreateEvents = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="four columns mt5">
                        <div className="font24 semi-bold">What type of event do you want to create</div>
                    </div>
                    <div className="eight columns"></div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <div className="types-of-event">
                            <Link to="/wedding" style={{textDecoration:"none", color:"unset"}}>
                                <div>
                                    <div>Weddings</div>
                                    <div className="font14">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                                <div>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </Link>
                            <a href="#">
                                <div>
                                    <div>Conference / Concerts</div>
                                    <div className="font14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, molestias inventore
                  aspernatur hic doloremque sequi iste officia non soluta facilis nobis</div>
                                </div>

                                <div>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div>Air Travel</div>

                                <div>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <div>Cinema</div>
                                    <div className="font14">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                                <div>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateEvents