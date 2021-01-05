import React from "react";

const AddEvents = () => {
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
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />
          </div>
        </section>

        <h5>Event Details</h5>
        <hr className="my-0" />
        <section className="input_box">
          <div class="form-group mt-4">
            <label for="exampleInputEmail1">
              Name of Event<sup>*</sup>
            </label>
            <textarea className="form-control" rows="4"></textarea>
          </div>

          <div class="form-group mt-4">
            <label for="exampleInputEmail1">
              Event Sector<sup>*</sup>
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="E.g Buiness Conference"
            />
          </div>

          <div className="row">
            <section className="col-md-6">
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">
                  Date of Event<sup>*</sup>
                </label>
                {/* <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Pick a day (s)"
                /> */}
                <select className="form-control">
                  <option disabled selected>Pick a day (s)</option>
                  <option>day</option>
                  <option>day</option>
                  <option>day</option>
                </select>
              </div>
            </section>

            <section className="col-md-6">
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">
                  Time of Event<sup>*</sup>
                </label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="E.g 10am"
                />
              </div>
            </section>
          </div>
          <div class="form-group mt-4">
            <label for="exampleInputEmail1">
              Event Venue<sup>*</sup>
            </label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddEvents;
