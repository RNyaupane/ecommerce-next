import Accordian from "@/sections/about/accordian";
import BrandCarousel from "@/sections/home/components/brand-carousel";
import Image from "next/image";

const sections = [
  {
    title: "What we really do?",
    text: "Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.",
  },
  {
    title: "Our Vision",
    text: "Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.",
  },
  {
    title: "History of the Company",
    text: "Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum.",
  },
  {
    title: "Cooperate with Us!",
    text: "Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.",
  },
];

export const metadata = {
  title: "About us",
  description: "Ecommerce developed by Roshan",
};

export default function About() {
  return (
    <>
      <div
        className="bg-img-hero mb-14"
        style={{ backgroundImage: "url(/img/1920x714/img1.jpg)" }}
      >
        <div className="container">
          <div className="flex-content-center max-width-620-lg flex-column mx-auto text-center min-height-564">
            <h1 className="h1 font-weight-bold">About Us</h1>
            <p className="text-gray-39 font-size-18 text-lh-default">
              Passion may be a friendly or eager interest in or admiration for a
              proposal, cause, discovery, or activity or love to a feeling of
              unusual excitement.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          {Array.from({ length: 3 }).map((item, index) => (
            <div class="col-md-4 mb-4 mb-md-0" key={index}>
              <div class="card mb-3 border-0 text-center rounded-0">
                <Image
                  height={300}
                  width={400}
                  class="img-fluid mb-3"
                  src={`/img/500X300/img${index + 1}.jpg`}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="font-size-18 font-weight-semi-bold mb-3">
                    What we really do?
                  </h5>
                  <p class="text-gray-90 max-width-334 mx-auto">
                    Donec libero dolor, tincidunt id laoreet vitae, ullamcorper
                    eu tortor. Maecenas pellentesque, dui vitae iaculis mattis,
                    tortor nisi faucibus magna,vitae ultrices lacus purus vitae
                    metus.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="bg-gray-1 py-12 mb-10 mb-lg-15">
        <div class="container">
          <div class="row">
            {Array.from({ length: 6 }).map((item, index) => (
              <div class="col-md-4 mb-5 mb-xl-0 col-xl text-center" key={index}>
                <Image
                  height={200}
                  width={200}
                  class="img-fluid mb-3 rounded-circle"
                  src={`/img/300X300/img${index + 15}.jpg`}
                  alt="Card image cap"
                />
                <h2 class="font-size-18 font-weight-semi-bold mb-0">
                  Thomas Snow
                </h2>
                <span class="text-gray-41">CEO/Founder</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="container mb-8 mb-lg-0">
        <div class="row mb-8">
          <div class="col-lg-7">
            <div className="row">
              {sections.map((section, index) => (
                <InfoSection
                  key={index}
                  title={section.title}
                  text={section.text}
                />
              ))}
            </div>
          </div>
          <Accordian />
        </div>
        {/* <!-- Brand Carousel --> */}
        <BrandCarousel />
        {/* <!-- End Brand Carousel --> */}
      </div>
    </>
  );
}

const InfoSection = ({ title, text }) => (
  <div className="col-lg-6 mb-5 mb-lg-8">
    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
      {title}
    </h3>
    <p className="text-gray-90">{text}</p>
  </div>
);
