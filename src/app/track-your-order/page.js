"use client";

import Breadcrumb from "@/components/breadcrumb";
import { useState } from "react";

export default function TrackYourOrder() {
  const [orderId, setOrderId] = useState("");
  const [billingEmail, setBillingEmail] = useState("");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Track Your Order" },
  ];

  const handleTrackOrder = () => {
    // Add tracking logic here (e.g., form submission or API call)
    console.log("Order ID:", orderId, "Billing Email:", billingEmail);
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="container">
        <div className="mx-xl-10">
          <div className="mb-6 text-center">
            <h1 className="mb-6">Track your Order</h1>
            <p className="text-gray-90 px-xl-10">
              To track your order, please enter your Order ID in the box below
              and press the &quot;Track&quot; button. This was given to you on
              your receipt and in the confirmation email you should have
              received.
            </p>
          </div>
          <div className="my-4 my-xl-8">
            <form className="js-validate" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="orderid">
                      Order ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="orderid"
                      id="orderid"
                      placeholder="Found in your order confirmation email."
                      aria-label="Found in your order confirmation email."
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="billingemail">
                      Billing email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="billingemail"
                      placeholder="Email you used during checkout."
                      aria-label="Email you used during checkout."
                      required
                      value={billingEmail}
                      onChange={(e) => setBillingEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col mb-1">
                  <button
                    type="button"
                    className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto"
                    onClick={handleTrackOrder}
                  >
                    Track
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
