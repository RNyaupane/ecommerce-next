import BrandCarousel from "@/sections/home/components/brand-carousel";

export const metadata = {
  title: "FAQ",
  description: "Ecommerce developed by Roshan",
};

export default function Faq() {
  return (
    <div class="container">
      <div class="mb-12 text-center">
        <h1>Frequently Asked Questions</h1>
        <p class="text-gray-44">
          This Agreement was last modified on 18th february 2019
        </p>
      </div>
      <div class="border-bottom border-color-1 mb-8 rounded-0">
        <h3 class="section-title mb-0 pb-2 font-size-25">
          Shipping Information
        </h3>
      </div>
      <div className="row mb-8">
        {[
          {
            question: "What Shipping Methods Are Available?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.",
          },
          {
            question: "How Long Will it Take To Get My Package?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.",
          },
          {
            question: "How Do I Track My Order?",
            answer:
              "Integer ex turpis, venenatis vitae nibh vel, vestibulum maximus quam. Ut pretium orci ac vestibulum porttitor. Fusce tempus diam quis justo porttitor gravida.",
          },
          {
            question: "Do I Need A Account To Place Order?",
            answer:
              "Integer ex turpis, venenatis vitae nibh vel, vestibulum maximus quam. Ut pretium orci ac vestibulum porttitor. Fusce tempus diam quis justo porttitor gravida.",
          },
        ].map((item, index) => (
          <div className="col-lg-6 mb-5 mb-lg-8" key={index}>
            <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
              {item.question}
            </h3>
            <p className="text-gray-90">{item.answer}</p>
          </div>
        ))}
      </div>
      <div class="mb-12 text-center">
        <h1>FAQ Second Version</h1>
      </div>
      {/* <!-- Basics Accordion --> */}
      <div id="basicsAccordion" className="mb-12">
        {[
          {
            id: "One",
            question: "What Shipping Methods Are Available?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
          {
            id: "Two",
            question: "How Long Will it Take To Get My Package?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
          {
            id: "Three",
            question: "How Do I Track My Order?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
          {
            id: "Four",
            question: "How Do I Place an Order?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
          {
            id: "Five",
            question: "How Should I Contact if I Have Any Queries?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
          {
            id: "Six",
            question: "Do I Need an Account to Place an Order?",
            answer:
              "In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus.",
          },
        ].map((item) => (
          <div
            className="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0"
            key={item.id}
          >
            <div
              className="card-header card-collapse bg-transparent-on-hover border-0"
              id={`basicsHeading${item.id}`}
            >
              <h5 className="mb-0">
                <button
                  type="button"
                  className="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-25 border-0"
                  data-toggle="collapse"
                  data-target={`#basicsCollapse${item.id}`}
                  aria-expanded="false"
                  aria-controls={`basicsCollapse${item.id}`}
                >
                  {item.question}
                  <span className="card-btn-arrow">
                    <i className="fas fa-chevron-down text-gray-90 font-size-18"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id={`basicsCollapse${item.id}`}
              className="collapse"
              aria-labelledby={`basicsHeading${item.id}`}
              data-parent="#basicsAccordion"
            >
              <div className="card-body pl-0 pb-8">
                <p className="mb-0">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <!-- End Basics Accordion --> */}

      <BrandCarousel />
    </div>
  );
}
