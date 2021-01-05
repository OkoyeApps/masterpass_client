import React from "react";

const AddEvent5 = () => {
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



        <h5>Event Tickets</h5>
        <hr className="my-0" />
        <section className="input_box">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Ticket Name<sup>*</sup>
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />
          </div>


          <div class="form-group mt-5">
            <label for="exampleInputEmail1">Ticket Incentives <sup>*</sup></label>
            <textarea className="form-control" rows="4"></textarea>
          </div>



          <div className="row">
            <section className="col-md-6">
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">
                  Ticket Prize<sup>*</sup>
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
  );
};

export default AddEvent5;
