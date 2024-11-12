import Breadcrumb from "@/components/breadcrumb";

const ForgotPassword = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Login" }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full  d-flex  justify-content-center">
        <div
          id="forgotPassword"
          // style={{ display: "none", opacity: "0" }}
          data-target-group="idForm"
        >
          <header className="text-center mb-7">
            <h2 className="h4 mb-0">Recover Password.</h2>
            <p>
              Enter your email address and an email with instructions will be
              sent to you.
            </p>
          </header>

          <div className="form-group">
            <div className="js-form-message js-focus-state">
              <label className="sr-only" htmlFor="recoverEmail">
                Your email
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="recoverEmailLabel">
                    <span className="fas fa-user"></span>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="recoverEmail"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="recoverEmailLabel"
                  required
                  data-msg="Please enter a valid email address."
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
              Recover Password
            </button>
          </div>

          <div className="text-center mb-4">
            <span className="small text-muted">Remember your password?</span>
            <a
              className="js-animation-link small"
              href="javascript:;"
              data-target="#login"
              data-link-group="idForm"
              data-animation-in="slideInUp"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
