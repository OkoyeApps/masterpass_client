import React from 'react'
import mediaIcon from "../../assets/image/importMedia.svg";

const AddEvent4 = () => {
    return (
        <div>
            <form>
            <h5>Event Type</h5>
        <hr className="my-0" />
        <section className="input_box">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Event Type<sup>*</sup>
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />
          </div>
        </section>



        <h5>Event Materials</h5>
        <hr className="my-0" />
        <section className="input_box">
        <div class="form-group">
            <label for="exampleInputEmail1">
              Event Materials<sup>*</sup>
            </label>
            <section className="media_dropzone">
              <input
                type="file"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Conference"
              />

              <div className="media_indicator">
                <img src={mediaIcon} alt="import media icon" />
                <p className="mt-3 mb-0">Upload Event image (Jpeg)</p>
              </div>
            </section>
          </div>

          <div class="form-group mt-4">
            <label for="exampleInputEmail1">
              Material Name<sup>*</sup>
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />
          </div>




          <div className="row">
            <section className="col-md-6">
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">
                  Material Prize<sup>*</sup>
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
                
              </div>
            </section>

            <section className="col-md-6">
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">
                  Material quality<sup>*</sup>
                </label>
                
                <select className="form-control">
                  <option disabled selected>Pick quality</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </section>
          </div>
        </section>        
            </form>
        </div>
    )
}

export default AddEvent4
