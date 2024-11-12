import React from "react";

export const metadata = {
  title: "My Account",
  description: "Ecommerce developed by Roshan",
};

export default function MyAccount() {
  return (
    <div className="container">
      <div className="mb-4 text-center">
        <h1>My Account</h1>
      </div>
      <div className="my-4 my-xl-8">
        <div className="row">
          {/* Login Section */}
          <div className="col-md-5 ml-xl-auto mr-md-auto mb-8 mb-md-0">
            <div className="border-bottom border-color-1 mb-6">
              <h3 className="section-title mb-0 pb-2 font-size-26">Login</h3>
            </div>
            <p className="text-gray-90 mb-4">
              Welcome back! Sign in to your account.
            </p>
            <form className="js-validate">
              <div className="form-group">
                <label htmlFor="signinEmail">
                  Username or Email address{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="signinEmail"
                  placeholder="Username or Email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signinPassword">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signinPassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <div className="custom-control custom-checkbox d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberCheckbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rememberCheckbox"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="mb-1">
                <button type="submit" className="btn btn-primary-dark-w px-5">
                  Login
                </button>
                <div className="mt-2">
                  <a className="text-blue" href="#">
                    Lost your password?
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="col-md-1 d-none d-md-block">
            <div className="flex-content-center h-100">
              <div className="width-1 bg-1 h-100"></div>
              <div className="width-50 height-50 border border-color-1 rounded-circle flex-content-center font-italic bg-white position-absolute">
                or
              </div>
            </div>
          </div>

          {/* Register Section */}
          <div className="col-md-5 mr-xl-auto">
            <div className="border-bottom border-color-1 mb-6">
              <h3 className="section-title mb-0 pb-2 font-size-26">Register</h3>
            </div>
            <p className="text-gray-90 mb-4">
              Create new account today to reap the benefits of a personalized
              shopping experience.
            </p>
            <form className="js-validate">
              <div className="form-group mb-5">
                <label htmlFor="registerEmail">
                  Email address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  placeholder="Email address"
                  required
                />
              </div>
              <p className="text-gray-90 mb-4">
                Your personal data will be used to manage your account and for
                other purposes described in our{" "}
                <a href="#" className="text-blue">
                  privacy policy
                </a>
                .
              </p>
              <button type="submit" className="btn btn-primary-dark-w px-5">
                Register
              </button>
            </form>
            <h3 className="font-size-18 mb-3">
              Sign up today and you will be able to:
            </h3>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item px-0">
                <i className="fas fa-check text-green font-size-16 mr-2"></i>{" "}
                Speed your way through checkout
              </li>
              <li className="list-group-item px-0">
                <i className="fas fa-check text-green font-size-16 mr-2"></i>{" "}
                Track your orders easily
              </li>
              <li className="list-group-item px-0">
                <i className="fas fa-check text-green font-size-16 mr-2"></i>{" "}
                Keep a record of all your purchases
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
