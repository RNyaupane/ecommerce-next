import BrandCarousel from "@/sections/home/components/brand-carousel";
import Link from "next/link";

export const metadata = {
  title: "Terms and Condition",
  description: "Ecommerce developed by Roshan",
};

const TermsAndCondition = () => {
  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h1>Terms and Conditions</h1>
        <p className="text-gray-44">
          This Agreement was last modified on 18th february 2019
        </p>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 pb-2 font-size-25">Intellectual Propertly</h3>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at
            lorem. Donec ultricies, lorem sed ultrices interdum.
          </li>
          <li>
            Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec
            tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum
            leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate
            enim.
          </li>
          <li>
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum.
          </li>
          <li>
            Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae
            ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa
            at faucibus.
          </li>
          <li>
            Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
            tortor, sit amet condimentum mi ligula sit amet augue.
          </li>
          <li>Pellentesque vitae eros eget enim mollis placerat.</li>
        </ol>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 pb-2 font-size-25">Termination</h3>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at
            lorem. Donec ultricies, lorem sed ultrices interdum.
          </li>
          <li>
            Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec
            tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum
            leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate
            enim.
          </li>
          <li>
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum.
          </li>
          <li>
            Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae
            ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa
            at faucibus.
          </li>
          <li>
            Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
            tortor, sit amet condimentum mi ligula sit amet augue.
          </li>
          <li>Pellentesque vitae eros eget enim mollis placerat.</li>
        </ol>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 pb-2 font-size-25">Changes To This Agreement</h3>
        <p className="text-gray-90">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms and Conditions by posting the updated terms on the Site.
          Your continued use of the Site after any such changes constitutes your
          acceptance of the new Terms and Conditions.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 pb-2 font-size-25">Contact Us</h3>
        <p className="text-gray-90">
          If you have any questions about this Agreement, please contact us
          filling this{" "}
          <Link href="/contact" className="text-blue font-weight-bold">
            contact form
          </Link>
        </p>
      </div>
      <BrandCarousel />
    </div>
  );
};

export default TermsAndCondition;
