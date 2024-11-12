import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";

const Login = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Login" }];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full  d-flex  justify-content-center">
        <div
          id="login"
          className="col-lg-5"
          data-target-group="idForm"
          style={{ maxWidth: "25rem" }}
        >
          {/* <!-- Title --> */}
          <header className="text-center mb-7">
            <h2 className="h4 mb-0">Welcome Back!</h2>
            <p>Login to manage your account.</p>
          </header>
          {/* <!-- End Title --> */}

          {/* <!-- Form Group --> */}
          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="signinEmail">
                Email
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="signinEmailLabel">
                    <span className="fas fa-user"></span>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="signinEmail"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="signinEmailLabel"
                  required
                  data-msg="Please enter a valid email address."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="signinPassword">
                Password
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="signinPasswordLabel">
                    <span className="fas fa-lock"></span>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="signinPassword"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="signinPasswordLabel"
                  required
                  data-msg="Your password is invalid. Please try again."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>
          {/* <!-- End Form Group --> */}

          <div className="d-flex justify-content-end mb-4">
            <Link
              className="js-animation-link small link-muted"
              href="/auth/forgot-password"
              data-target="#forgotPassword"
              data-link-group="idForm"
              data-animation-in="slideInUp"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mb-2">
            <button
              type="submit"
              className="btn btn-block btn-sm btn-primary transition-3d-hover"
            >
              Login
            </button>
          </div>

          <div className="text-center mb-4">
            <span className="small text-muted">Do not have an account?</span>
            <Link
              className="js-animation-link small text-dark"
              href="/auth/register"
              data-target="#signup"
              data-link-group="idForm"
              data-animation-in="slideInUp"
            >
              &nbsp;Signup
            </Link>
          </div>

          <div className="text-center">
            <span className="u-divider u-divider--xs u-divider--text mb-4">
              OR
            </span>
          </div>

          {/* <!-- Login Buttons --> */}
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
          {/* <!-- End Login Buttons --> */}
        </div>
      </div>
    </>
  );
};

export default Login;
