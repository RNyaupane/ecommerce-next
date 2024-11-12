"use client";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";

import "@/assets/vendor/font-awesome/css/fontawesome-all.min.css";
import "@/assets/css/font-electro.css";
import "@/assets/vendor/animate.css/animate.min.css";
import "@/assets/vendor/hs-megamenu/src/hs.megamenu.css";
import "@/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "@/assets/vendor/fancybox/jquery.fancybox.css";
import "@/assets/vendor/slick-carousel/slick/slick.css";
import "@/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "@/assets/css/theme.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoToTop from "@/components/go-to-top";
import Sidebar from "@/components/sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./libs/store";

// export const metadata = {
//   title: "Ecommerce",
//   description: "Ecommerce developed by WHIVE",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <Provider store={store}>
          <Navbar />

          <main id="content" role="main">
            {children}
          </main>

          <Footer />
        </Provider>

        <GoToTop />

        {/* <Sidebar /> */}

        <Script src="/assets/vendor/jquery/dist/jquery.min.js" />
        <Script src="/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js" />
        <Script src="/assets/vendor/popper.js/dist/umd/popper.min.js" />
        <Script src="/assets/vendor/bootstrap/bootstrap.min.js" />

        <Script src="/assets/vendor/appear.js" />
        <Script src="/assets/vendor/jquery.countdown.min.js" />
        <Script src="/assets/vendor/hs-megamenu/src/hs.megamenu.js" />
        <Script src="/assets/vendor/svg-injector/dist/svg-injector.min.js" />
        <Script src="/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js" />
        <Script src="/assets/vendor/jquery-validation/dist/jquery.validate.min.js" />
        <Script src="/assets/vendor/fancybox/jquery.fancybox.min.js" />
        <Script src="/assets/vendor/typed.js/lib/typed.min.js" />
        <Script src="/assets/vendor/slick-carousel/slick/slick.js" />
        <Script src="/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js" />

        <Script src="/assets/js/hs.core.js" />
        <Script src="/assets/js/components/hs.countdown.js" />
        <Script src="/assets/js/components/hs.header.js" />
        <Script src="/assets/js/components/hs.hamburgers.js" />
        <Script src="/assets/js/components/hs.unfold.js" />
        <Script src="/assets/js/components/hs.focus-state.js" />
        <Script src="/assets/js/components/hs.malihu-scrollbar.js" />
        <Script src="/assets/js/components/hs.validation.js" />
        <Script src="/assets/js/components/hs.fancybox.js" />
        <Script src="/assets/js/components/hs.onscroll-animation.js" />
        <Script src="/assets/js/components/hs.slick-carousel.js" />
        <Script src="/assets/js/components/hs.show-animation.js" />
        <Script src="/assets/js/components/hs.svg-injector.js" />
        <Script src="/assets/js/components/hs.go-to.js" />
        <Script src="/assets/js/components/hs.selectpicker.js" />
      </body>
    </html>
  );
}
