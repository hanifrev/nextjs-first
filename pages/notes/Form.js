import React from "react";
import DropFileInput from "../../src/component/DropFile";

const Form = () => {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div>
      <form>
        <div className="form-1 flex flex-col">
          <span>
            <label>First Name</label>
            <input
              type="text"
              required
              name="first name"
              placeholder="Your First Name"
            ></input>
          </span>
          <span>
            <label>Last Name</label>
            <input
              type="text"
              required
              name="last name"
              placeholder="Your Last Name"
            ></input>
          </span>
          <span>
            <label>Email Address</label>
            <input
              type="email"
              required
              name="email"
              placeholder="email@computer.com"
            ></input>
          </span>
          <span>
            <label>Phone Number</label>
            <input
              type="number"
              required
              name="phone number"
              placeholder="+628666666"
            ></input>
          </span>
          <span>
            <label>Date of Birth</label>
            <input
              type="text"
              required
              name="date of birth"
              placeholder="DD/MM/YY"
            ></input>
          </span>
          <span>
            <label>Address</label>
            <input
              type="text"
              required
              name="address"
              placeholder="Your Current Address"
            ></input>
          </span>
          <span>
            <label>Province</label>
            <input
              type="text"
              required
              name="province"
              placeholder="Your Current Province"
            ></input>
          </span>
          <span>
            <label>City</label>
            <input
              type="text"
              required
              name="city"
              placeholder="Your Current City"
            ></input>
          </span>

          <div className="radiocheck">
            <label className="">Which one do you prefer?</label>

            <p>
              <input type="radio" id="test1" name="work" />
              <label className="ptype" htmlFor="test1">
                WFO
              </label>
            </p>
            <p>
              <input type="radio" id="test2" name="work" />
              <label className="ptype" htmlFor="test2">
                WFH
              </label>
            </p>
            <p>
              <input type="radio" id="test3" name="work" />
              <label className="ptype" htmlFor="test3">
                Both are fine
              </label>
            </p>
          </div>

          <span>
            <label>University/School</label>
            <input
              type="text"
              required
              name="university"
              placeholder="Your Current University/School"
            ></input>
          </span>
          <span>
            <label>Major</label>
            <input
              type="text"
              required
              name="major"
              placeholder="Your Major"
            ></input>
          </span>
          <span>
            <label>Work Experience</label>
            <input
              type="text"
              required
              name="work"
              placeholder="Your Experience"
            ></input>
            <label className="pt-2 noreq">You can put 0, it's fine!</label>
          </span>
          <span>
            <label>GPA</label>
            <input
              type="number"
              required
              name="gpa"
              placeholder="Your GPA Score"
            ></input>
          </span>

          <div className="radiocheck">
            <label className="">Which one do you prefer?</label>

            <p>
              <input type="radio" id="teman" name="ref" />
              <label className="ptype" htmlFor="teman">
                Teman / Keluarga / Rekan
              </label>
            </p>
            <p>
              <input type="radio" id="ig" name="ref" />
              <label className="ptype" htmlFor="ig">
                Instagram
              </label>
            </p>
            <p>
              <input type="radio" id="li" name="ref" />
              <label className="ptype" htmlFor="li">
                Linkedin
              </label>
            </p>
            <p>
              <input type="radio" id="WhatsApp" name="ref" />
              <label className="ptype" htmlFor="WhatsApp">
                WhatsApp
              </label>
            </p>
            <p>
              <input type="radio" id="Facebook" name="ref" />
              <label className="ptype" htmlFor="Facebook">
                Facebook
              </label>
            </p>
            <p>
              <input type="radio" id="Twitter" name="ref" />
              <label className="ptype" htmlFor="Twitter">
                Twitter
              </label>
            </p>
            <p>
              <input type="radio" id="se" name="ref" />
              <label className="ptype" htmlFor="se">
                Search Engine ( Google / Bing / Yahoo / Website)
              </label>
            </p>
            <p>
              <input type="radio" id="Other" name="ref" />
              <label className="ptype" htmlFor="Other">
                Other
              </label>
            </p>
          </div>

          <span>
            <label className="upladd">Upload Your Resume</label>
            {/* <input
                    className="upload"
                    type="file"
                    required
                    name="resume"
                  ></input> */}
            <DropFileInput
              onFileChange={(files) => onFileChange(files)}
              name="resume"
            />
            {/* <section className="hidden md:block pt-4">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <div className="flex text-neutral70 justify-center pt-[46px]">
                        <img src="/assets/Career/down.svg" />
                        <p className="font-bold text-xl pl-2">
                          Drop Files Here
                        </p>
                      </div>
                    </div>
                    <aside>
                      <ul className="text-neutral60 text-xs">{files}</ul>
                    </aside>
                  </section> */}
          </span>

          <span>
            <label className="noreq upladd">
              Upload Certificate (Optional)
            </label>
            {/* <input
                    className="upload"
                    type="file"
                    name="certificate"
                  ></input> */}
            <DropFileInput
              onFileChange={(files) => onFileChange(files)}
              name="certificate"
            />
            {/* <section className="hidden md:block pt-4">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <div className="flex text-neutral70 justify-center pt-[46px]">
                        <img src="/assets/Career/down.svg" />
                        <p className="font-bold text-xl pl-2">
                          Drop Files Here
                        </p>
                      </div>
                    </div>
                    <aside>
                      <ul className="text-neutral60 text-xs">{files}</ul>
                    </aside>
                  </section> */}
          </span>

          <span>
            <label className="noreq">Linkedin</label>
            <input
              type="text"
              name="linkedin"
              placeholder="Your Linkedin"
            ></input>
          </span>
          <span>
            <label className="noreq">Github</label>
            <input type="text" name="github" placeholder="Your Github"></input>
          </span>
          <span>
            <label>Portfolio</label>
            <input
              type="text"
              required
              name="portfolio"
              placeholder="Your Portfolio"
            ></input>
            <label className="pt-2 noreq">
              Behance, Dribbble, atau yang lainnya
            </label>
          </span>
          <span>
            <label>Why you wanna join Roketin?</label>
            <input
              type="text"
              required
              name="portfolio"
              placeholder="Tell me why"
            ></input>
          </span>
        </div>

        <button className="send-btn mt-10" type="submit">
          <div className="text-base font-bold">Submit</div>
        </button>
      </form>
    </div>
  );
};

export default Form;
