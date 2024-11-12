import BrandCarousel from "@/sections/home/components/brand-carousel";

export const metadata = {
  title: "Contact",
  description: "Ecommerce developed by Roshan",
};

export default function Contact() {
  return (
    <>
      <div className="mb-8 mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.915411235845!2d85.34463115!3d27.7179392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19750822319f%3A0x1f8f90821e0f5934!2sRato%20Pul!5e0!3m2!1sen!2snp!4v1726857089363!5m2!1sen!2snp"
          width="100%"
          height="514"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>

      <div className="container">
        <div className="row mb-10">
          <div className="col-md-8 col-xl-9">
            <div className="mr-xl-6">
              <div className="border-bottom border-color-1 mb-5">
                <h3 className="section-title mb-0 pb-2 font-size-25">
                  Leave us a Message
                </h3>
              </div>
              <p className="max-width-830-xl text-gray-90">
                Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus.
                Aliquam dignissim, elit non mattis ultrices, neque odio
                ultricies tellus, eu porttitor nisl ipsum eu massa.
              </p>
              <form className="js-validate" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="js-form-message mb-4">
                      <label className="form-label">
                        First name
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        required
                        data-msg="Please enter your first name."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="js-form-message mb-4">
                      <label className="form-label">
                        Last name
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        required
                        data-msg="Please enter your last name."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="js-form-message mb-4">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Subject"
                        data-msg="Please enter subject."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="js-form-message mb-4">
                      <label className="form-label">Your Message</label>
                      <div className="input-group">
                        <textarea
                          className="form-control p-5"
                          rows="4"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary-dark-w px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="border-bottom border-color-1 mb-5">
              <h3 className="section-title mb-0 pb-2 font-size-25">
                Our Store
              </h3>
            </div>
            <div className="mr-xl-6">
              <address className="mb-6">
                121 King Street, <br />
                Melbourne VIC 3000, <br />
                Australia
              </address>
              <h5 className="font-size-14 font-weight-bold mb-3">
                Hours of Operation
              </h5>
              <ul className="list-unstyled mb-6">
                <li className="flex-center-between mb-1">
                  <span>Monday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between mb-1">
                  <span>Tuesday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between mb-1">
                  <span>Wednesday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between mb-1">
                  <span>Thursday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between mb-1">
                  <span>Friday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between mb-1">
                  <span>Saturday:</span>
                  <span>12-6 PM</span>
                </li>
                <li className="flex-center-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <h5 className="font-size-14 font-weight-bold mb-3">Careers</h5>
              <p className="text-gray-90">
                If you’re interested in employment opportunities at Electro,
                please email us:{" "}
                <a
                  className="text-blue text-decoration-on"
                  href="mailto:contact@yourstore.com"
                >
                  contact@yourstore.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <BrandCarousel />
      </div>
    </>
  );
}
