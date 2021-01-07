import React from "react";
import mediaIcon from '../../assets/image/importMedia.svg'

const AddEvent2 = (props) => {
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


        <h5>Event Type</h5>
        <hr className="my-0" />
        <section className="input_box">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Event Banner<sup>*</sup>
            </label>
            <section className="media_dropzone">
            <input
              type="file"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />

            <div className="media_indicator">
                <img src={mediaIcon} alt="import media icon"/>
                <p className="mt-3 mb-0">Upload Event image (Jpeg)</p>
            </div>
            </section>
          </div>

          <div class="form-group mt-5">
          <label for="exampleInputEmail1">
              Event Video<sup>*</sup>
            </label>
            <section className="media_dropzone">
            <input
              type="file"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />

            <div className="media_indicator">
                <img src={mediaIcon} alt="import media icon"/>
                <p className="mt-3 mb-0">Upload Video</p>
            </div>
            </section>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddEvent2;
