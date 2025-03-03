import React from "react";
// import "./Checkout.css";
import paypalLogo from "../../assets/images/paypal.svg";
import visaLogo from "../../assets/images/visa.svg";
import mastercardLogo from "../../assets/images/mastercard.svg";
import gpayLogo from "../../assets/images/gpay.svg";

const Checkout = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner bg-dark pt-4">
        <div className="text-center h-450 text-white pt-70 iphoneh">
          <h2 className="text-white fs-50 fw-bold">Checkout</h2>
        </div>
      </section>

      {/* Billing Details Section */}
      <section className="bodypx lightgraybg pb-5 pt-0">
        <div className="container-fluid">
          <div className="row">
            {/* Billing Details Form */}
            <div className="col-sm-6 outer-col-2">
              <div className="form-box shadowone overflow checkoutboxp">
                <div className="title mb-20">
                  <span className="fn-24 fw-bold mb-4">Billing Details</span>
                  <form className="ckeckoutform mt-3">
                    <div className="row jumbotron box8">
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">
                          First name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          id="name-f"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-l">
                          Last name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          id="name-l"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="email">
                          Email address<span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-1">
                          Flat No./ Plot No./ Company Name
                          <span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="Locality"
                          id="address-1"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-2">
                          Street address<span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="address"
                          id="address-2"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="Country">
                          Country / Region<span className="text-red">*</span>
                        </label>
                        <select className="form-control custom-select browser-default">
                          <option selected>-Select-</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="State">
                          State / Province<span className="text-red">*</span>
                        </label>
                        <select className="form-control custom-select browser-default">
                          <option selected>-Select-</option>
                          <option value="State">State</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="City">
                          Town / City<span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="City"
                          id="City"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="zip">
                          Zip/Postal Code<span className="text-red">*</span>
                        </label>
                        <input
                          type="zip"
                          className="form-control"
                          name="Zip"
                          id="zip"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="mobile">
                          Mobile Number<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control ps-3 bornone"
                          id="mobile_code"
                          placeholder=""
                          name="name"
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="Address">
                          Save Address as<span className="text-red">*</span>
                        </label>
                        <select
                          id="Address"
                          className="form-control browser-default custom-select"
                        >
                          <option selected>-Select-</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Billing address same as address
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Shipping Address Form */}
            <div className="col-sm-6 outer-col-2">
              <div className="form-box shadowone overflow checkoutboxp ipadmtop">
                <div className="title mb-20">
                  <span className="fn-24 fw-bold mb-4">
                    Ship to different address?
                  </span>
                  <form className="ckeckoutform mt-3">
                    <div className="row jumbotron box8">
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">
                          First name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          id="name-f"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-l">
                          Last name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          id="name-l"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="email">
                          Email address<span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-1">
                          Flat No./ Plot No./ Company Name
                          <span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="Locality"
                          id="address-1"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-2">
                          Street address<span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="address"
                          id="address-2"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="Country">
                          Country / Region<span className="text-red">*</span>
                        </label>
                        <select className="form-control custom-select browser-default">
                          <option selected>-Select-</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="State">
                          State / Province<span className="text-red">*</span>
                        </label>
                        <select className="form-control custom-select browser-default">
                          <option selected>-Select-</option>
                          <option value="State">State</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="City">
                          Town / City<span className="text-red">*</span>
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          name="City"
                          id="City"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="zip">
                          Zip/Postal Code<span className="text-red">*</span>
                        </label>
                        <input
                          type="zip"
                          className="form-control"
                          name="Zip"
                          id="zip"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="mobile">
                          Mobile Number<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control ps-3 bornone"
                          id="mobile_code"
                          placeholder=""
                          name="name"
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="Address">
                          Save Address as<span className="text-red">*</span>
                        </label>
                        <select
                          id="Address"
                          className="form-control browser-default custom-select"
                        >
                          <option selected>-Select-</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Billing address same as address
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary and Payment Section */}
      <section className="bodypx lightgraybg py-80 pt-0">
        <div className="container-fluid">
          <div className="row">
            {/* Order Summary */}
            <div className="col-lg-6">
              <div className="form-box shadowone overflow checkoutboxp mt-0 top-0 h-100">
                <div className="w-100 h-100 d-flex flex-column">
                  <span className="fn-24 fw-bold">Order Summary</span>
                  <hr />
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Cart Subtotal</span>{" "}
                    <span className="fw-600">$3600</span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Discount on cart</span>{" "}
                    <span className="text-green fw-600">-500</span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Taxes</span> <span className="fw-600">100</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 pt-2 text-dgray">
                    <span className="fw-600">Order Total</span>{" "}
                    <strong className="text-dark">3200</strong>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Reward Points</span>{" "}
                    <span className="text-green fw-600">500</span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Wallet</span>{" "}
                    <span className="text-green fw-600">-500</span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Coupon Discount (tynr20)</span>{" "}
                    <span className="text-green fw-600">-20</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 text-dgray">
                    <span className="fn-24 fw-bold">Total</span>{" "}
                    <span className="text-dark fn-24 fw-bold">2180</span>
                  </div>
                  <button className="btn checkoutbtn w-100 mt-auto py-3">
                    You Save 500 on this order
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="col-lg-6">
              <div className="form-box shadowone overflow checkoutboxp mt-0 top-0 h-100">
                <div className="accordion" id="accordionPayment">
                  <span className="fn-24 fw-bold mb-4">Payment method</span>
                  {/* Direct Bank Transfer */}
                  <div className="accordion-item mb-3 borderlight rounded8 mt-3">
                    <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
                      <div
                        className="form-check w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsebank"
                        aria-expanded="false"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Directbank"
                          id="Directbank1"
                        />
                        <label
                          className="form-check-label mb-0 fw-600 fn-16"
                          htmlFor="Directbank1"
                        >
                          Direct bank transfer
                        </label>
                      </div>
                    </h5>
                    <div
                      id="collapsebank"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body pt-0">
                        <div className="mb-3 text-dgray fs-10 thin-text">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Credit Card */}
                  <div className="accordion-item mb-3 borderlight rounded8 mt-3">
                    <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
                      <div
                        className="form-check w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCC"
                        aria-expanded="false"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment"
                          id="payment1"
                        />
                        <label
                          className="form-check-label mb-0 fw-600 fn-16"
                          htmlFor="payment1"
                        >
                          Credit Card
                        </label>
                      </div>
                      <span>
                        <svg
                          fill="#000000"
                          width="34"
                          height="25"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>credit-card-front</title>
                          <path d="M28 5.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v16c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-16c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 24c-0.001 0.69-0.56 1.249-1.25 1.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16c0.001-0.69 0.56-1.249 1.25-1.25h24c0.69 0.001 1.249 0.56 1.25 1.25v0zM10 21.25h-4c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h4c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM20 21.25h-6c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h6c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM24 17.25h-18c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h18c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM26 9.25h-6c-0.414 0-0.75 0.336-0.75 0.75v0 4c0 0.414 0.336 0.75 0.75 0.75h6c0.414-0 0.75-0.336 0.75-0.75v0-4c-0-0.414-0.336-0.75-0.75-0.75v0zM25.25 13.25h-4.5v-2.5h4.5z"></path>
                        </svg>
                      </span>
                    </h5>
                    <div
                      id="collapseCC"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        <div className="mb-3">
                          <label className="form-label">Card Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Name on card</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="mb-3">
                              <label className="form-label">Expiry date</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="MM/YY"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="mb-3">
                              <label className="form-label">CVV Code</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="accordion-item mb-3 borderlight rounded8">
                    <h5 className="h5 px-3 py-2 accordion-header d-flex justify-content-between align-items-center">
                      <div
                        className="form-check w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePP"
                        aria-expanded="false"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment"
                          id="payment2"
                        />
                        <label
                          className="form-check-label mb-0 fw-600 fn-16"
                          htmlFor="payment2"
                        >
                          PayPal
                        </label>
                      </div>
                      <span className="rounded-1 logopad">
                        <img src={paypalLogo} alt="PayPal" />
                      </span>
                      <span className="rounded-1 logopad">
                        <img src={visaLogo} alt="Visa" />
                      </span>
                      <span className="rounded-1 logopad">
                        <img src={mastercardLogo} alt="Mastercard" />
                      </span>
                      <span className="rounded-1 logopad">
                        <img src={gpayLogo} alt="Google Pay" />
                      </span>
                    </h5>
                    <div
                      id="collapsePP"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        <div className="px-2 col-lg-6 mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wish */}
                  <div className="accordion-item mb-3 borderlight rounded8">
                    <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
                      <div className="form-check w-100">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="wish"
                          id="wish2"
                        />
                        <label
                          className="form-check-label mb-0 fw-600 fn-16"
                          htmlFor="wish2"
                        >
                          Wish
                        </label>
                      </div>
                    </h5>
                  </div>

                  {/* Cash on Delivery */}
                  <div className="accordion-item mb-3 borderlight rounded8">
                    <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
                      <div className="form-check w-100">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="wish"
                          id="Cashon"
                        />
                        <label
                          className="form-check-label mb-0 fw-600 fn-16"
                          htmlFor="Cashon"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </h5>
                  </div>

                  {/* Place Order Button */}
                  <a
                    href=""
                    className="btn-darkblack mt-2 mt-xl-3 fw-500 fn-16 text-capitalize"
                  >
                    <span>Place Order</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
