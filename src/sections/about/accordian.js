export default function Accordian() {
  const accordionItems = [
    {
      headingId: "basicsHeadingOne",
      collapseId: "basicsCollapseOnee",
      title: "Support 24/7",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
      isOpen: true,
    },
    {
      headingId: "basicsHeadingTwo",
      collapseId: "basicsCollapseTwo",
      title: "Best Quality",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
      isOpen: false,
    },
    {
      headingId: "basicsHeadingThree",
      collapseId: "basicsCollapseThree",
      title: "Fastest Delivery",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
      isOpen: false,
    },
    {
      headingId: "basicsHeadingFour",
      collapseId: "basicsCollapseFour",
      title: "Customer Care",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
      isOpen: false,
    },
    {
      headingId: "basicsHeadingFive",
      collapseId: "basicsCollapseFive",
      title: "Over 200 Satisfied Customers",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
      isOpen: false,
    },
  ];
  return (
    <div className="col-lg-5">
      <div className="ml-lg-8">
        <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
          What can we do for you?
        </h3>
        <div id="basicsAccordion1" className="about-accordion">
          {accordionItems.map((item, index) => (
            <AccordionCard
              key={index}
              headingId={item.headingId}
              collapseId={item.collapseId}
              title={item.title}
              content={item.content}
              isOpen={item.isOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const AccordionCard = ({ headingId, collapseId, title, content, isOpen }) => (
  <div className="card mb-4 border-color-4 rounded-0">
    <div className="card-header card-collapse border-color-4" id={headingId}>
      <h5 className="mb-0">
        <button
          type="button"
          className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
          data-toggle="collapse"
          data-target={`#${collapseId}`}
          aria-expanded={isOpen}
          aria-controls={collapseId}
        >
          <span className="border border-color-5 rounded font-size-12 mr-5">
            <i className="fas fa-plus"></i>
            <i className="fas fa-minus"></i>
          </span>
          {title}
        </button>
      </h5>
    </div>
    <div
      id={collapseId}
      className={`collapse ${isOpen ? "show" : ""}`}
      aria-labelledby={headingId}
      data-parent="#basicsAccordion1"
    >
      <div className="card-body">
        <p className="mb-0">{content}</p>
      </div>
    </div>
  </div>
);
