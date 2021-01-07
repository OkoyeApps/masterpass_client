import React,{useState} from "react";
import mediaIcon from "../../assets/image/importMedia.svg";

const AddEvent3 = (props) => {

    const [pickedSocials, setPickedSocials] = useState([]);


const addSocial =(e)=>{
    let arraySocial = [...pickedSocials];

    if(arraySocial.includes(e.target.value)){
        arraySocial.splice(arraySocial.findIndex((unpicked)=>unpicked===e.target.value))
    }else{
        arraySocial.push(e.target.value)
    }
    setPickedSocials(arraySocial)
    // setPickedSocials("chai")
}

console.log("picked", pickedSocials)


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

        <h5>Event Speakers</h5>
        <hr className="my-0" />
        <section className="input_box">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Speakers Image<sup>*</sup>
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
                <p className="mt-3 mb-0">Upload Speaker's image (Jpeg)</p>
              </div>
            </section>
          </div>

          <div class="form-group mt-5">
            <label for="exampleInputEmail1">
              Speakers Name<sup>*</sup>
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Conference"
            />
          </div>

          <div class="form-group mt-5">
            <label for="exampleInputEmail1">Speakers Workplace/Role</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>

          <div className="form-group mt-5">
            <label for="exampleInputEmail1">
              Speakers Socials<sup>*</sup>
            </label>
            <section className="socials">



              <article className="row mx-0 mb-3 d-flex align-items-center">
                  <section className="col-7">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="instagram"
                    id="social0"
                    onClick={addSocial}
                  />
                  <label class="form-check-label ml-2" for="social0">
                    Instagram
                  </label>
                </div>
                  </section>
                <section className="col-5">
                <input type="text" className="form-control" defaultValue="@" disabled={!(pickedSocials.includes("instagram"))}/>
                </section>
              </article>



              <article className="row mx-0 mb-3">
                  <section className="col-7">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="twitter"
                    id="social1"
                    onClick={addSocial}
                  />
                  <label class="form-check-label ml-2" for="social1">
                    Twitter
                  </label>
                </div>
                  </section>
                <section className="col-5">
                <input type="text" className="form-control" defaultValue="@" disabled={!(pickedSocials.includes("twitter"))}/>
                </section>
              </article>


              <article className="row mx-0 mb-3">
                  <section className="col-7">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="facebook"
                    id="social2"
                    onClick={addSocial}
                  />
                  <label class="form-check-label ml-2" for="social2">
                    Facebook
                  </label>
                </div>
                  </section>
                <section className="col-5">
                <input type="text" className="form-control" defaultValue="@" disabled={!(pickedSocials.includes("facebook"))}/>
                </section>
              </article>



              <article className="row mx-0">
                  <section className="col-7">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="youtube"
                    id="social3"
                    onClick={addSocial}
                  />
                  <label class="form-check-label ml-2" for="social3">
                    Youtube
                  </label>
                </div>
                  </section>
                <section className="col-5">
                <input type="text" className="form-control" defaultValue="@" disabled={!(pickedSocials.includes("youtube"))}/>
                </section>
              </article>
            </section>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddEvent3;
