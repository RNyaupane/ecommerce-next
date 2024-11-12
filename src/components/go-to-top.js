"use client";
export default function GoToTop() {
  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <a
      className="js-go-to u-go-to animated js-animation-was-fired slideInUp"
      href="#"
      onClick={handleScrollToTop}
      style={{
        display: "inline-block",
        position: "fixed",
        bottom: "35px",
        right: "25px",
      }}
    >
      <span className="fas fa-arrow-up u-go-to__inner"></span>
    </a>
  );
}
