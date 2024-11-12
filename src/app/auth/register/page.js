import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";

const Signup = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Login" }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full  d-flex  justify-content-center">
        <div id="signup" className="col-lg-5" style={{ maxWidth: "25rem" }}>
          {/* <!-- Title --> */}
          <header className="text-center mb-7">
            <h2 className="h4 mb-0">Welcome to Electro.</h2>
            <p>Fill out the form to get started.</p>
          </header>
          {/* <!-- End Title --> */}

          {/* <!-- Form Group --> */}
          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="signupEmail">
                Email
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="signupEmailLabel">
                    <span className="fas fa-user"></span>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="signupEmail"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="signupEmailLabel"
                  required
                  data-msg="Please enter a valid email address."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="signupPassword">
                Password
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="signupPasswordLabel">
                    <span className="fas fa-lock"></span>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="signupPassword"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="signupPasswordLabel"
                  required
                  data-msg="Your password is invalid. Please try again."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="signupConfirmPassword">
                Confirm Password
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="signupConfirmPasswordLabel"
                  >
                    <span className="fas fa-key"></span>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  id="signupConfirmPassword"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="signupConfirmPasswordLabel"
                  required
                  data-msg="Password does not match the confirm password."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>

          <div className="mb-2">
            <button
              type="submit"
              className="btn btn-block btn-sm btn-primary transition-3d-hover"
            >
              Get Started
            </button>
          </div>

          <div className="text-center mb-4">
            <span className="small text-muted">Already have an account?</span>
            <Link
              className="js-animation-link small text-dark"
              href="/auth/login"
              data-target="#login"
              data-link-group="idForm"
              data-animation-in="slideInUp"
            >
              &nbsp;Login
            </Link>
          </div>

          <div className="text-center">
            <span className="u-divider u-divider--xs u-divider--text mb-4">
              OR
            </span>
          </div>

          <div className="d-flex">
            <a
              className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1"
              href="#"
            >
              <span className="fab fa-facebook-square mr-1"></span>
              Facebook
            </a>
            <a
              className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0"
              href="#"
            >
              <span className="fab fa-google mr-1"></span>
              Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
