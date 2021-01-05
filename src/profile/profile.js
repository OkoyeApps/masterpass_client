import React from 'react'
import { modalControl } from '../assets/main'

const Profile = () => {
    return (
        <section>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">

          <div className="relative profile-details-wrapper mt5">

            <div></div>

            <div>
              <div className="flex justify-center relative">
                <div className="profile-dp">NJ</div>
              </div>

              <div className="relative" style={{top:"-20px"}}>
                <div className="text-center semi-bold font24">Nweke Jeremiah</div>

                <div className="flex justify-center">
                  <div className="text-center mt2">
                    {/* <!-- <div className="font14">
                    <i className="far fa-envelope fa-lg"></i>
                  </div> --> */}
                    <div>name@email.com</div>
                  </div>

                  <div className="w2"></div>

                  <div className="text-center mt2">
                    {/* <!-- <div className="font14">
                    <i className="fas fa-mobile-alt fa-lg"></i>
                  </div> --> */}
                    <div>07017895599</div>
                  </div>
                </div>

                <div className="mt5 flex justify-center text-center">
                   {/* <button onClick={()=>{modalControl('change-password')}}>Reset Password</button> */}
                  <span className="link-color semi-bold cursor-pointer" onClick={()=>{modalControl('change-password')}}>Reset
                    Password</span>
                  <div className="w2"></div>
                  <span className="link-color semi-bold cursor-pointer" onClick={()=>{modalControl('edit-profile')}}>Edit
                    Profile</span>
                   {/* <button onClick={()=>{modalControl('edit-profile')}}>Edit Profile</button>  */}
                </div>
              </div>


            </div>
          </div>


          <div id="edit-profile" className="modal">
            <div className="modal-body">
              <div>
                <div className="modal-content">
                  <div className="flex justify-space-between">
                    <div></div>
                    <div className="modal-title">Edit Profile</div>
                    <div className="close-modal" id="close-modal">
                      <span onClick={()=>{modalControl('edit-profile')}}>&#10005;</span>
                    </div>
                  </div>

                  <div className="mt2">
                    <form action="">
                      <div className="input-wrapper mt2 mb2">
                        <input type="text" placeholder="Name"/>
                      </div>
                      <div className="input-wrapper mt2 mb2">
                        <input type="text" placeholder="Email Address"/>
                      </div>
                      <div className="input-wrapper mt2 mb2">
                        <input type="text" placeholder="Phone Number"/>
                      </div>
                      <div className="mt2 mb2">
                        <button className="button">Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="change-password" className="modal">
            <div className="modal-body">
              <div>
                <div className="modal-content">
                  <div className="flex justify-space-between">
                    <div></div>
                    <div className="modal-title">Reset Password</div>
                    <div className="close-modal" id="close-modal">
                      <span onClick={()=>{modalControl('change-password')}}>&#10005;</span>
                    </div>
                  </div>

                  <div className="mt2">
                    <form action="">
                      <div className="input-wrapper mt2 mb2">
                        <input type="password" placeholder="Current Password"/>
                      </div>
                      <div className="input-wrapper mt2 mb2">
                        <input type="password" placeholder="New Password"/>
                      </div>
                      <div className="input-wrapper mt2 mb2">
                        <input type="password" placeholder="Re-type New Password"/>
                      </div>
                      <div className="mt2 mb2">
                        <button className="button">Reset Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  </section>
    )
}

export default Profile