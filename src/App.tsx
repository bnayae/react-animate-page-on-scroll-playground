import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use  for styles
import "./App.css";
import { Page, PageOdd } from "./components/Page";
import { PageScrollRaw } from "./components/PageScroll/PageScrollRaw";
import { PageIndex } from "./Hooks/PageContext";

// https://samuelweber.at/article/how-to-use-aos-js-in-your-project

function App() {
  useEffect(() => {
    // AOS.init({
    //   offset: 120, // offset (in px) from the original trigger point
    //   delay: 500, // values from 0 to 3000, with step 50ms
    //   duration: 1400, // values from 0 to 3000, with step 50ms
    //   easing: "ease", // default easing for AOS animations
    // });
    // AOS.init({
    //   // Global settings:
    //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    //   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    //   initClassName: "aos-init", // class applied after initialization
    //   animatedClassName: "aos-animate", // class applied on animation
    //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    //   offset: 120, // offset (in px) from the original trigger point
    //   delay: 500, // values from 0 to 3000, with step 50ms
    //   duration: 1400, // values from 0 to 3000, with step 50ms
    //   easing: "ease", // default easing for AOS animations
    //   once: false, // whether animation should happen only once - while scrolling down
    //   mirror: true, // whether elements should animate out while scrolling past them
    //   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    // });
  });

  return (
    <div className="App">
      <PageScrollRaw>
        <PageIndex pageIndex={0}>
          <Page content="Page 1"></Page>
        </PageIndex>
        <PageIndex pageIndex={1}>
          <PageOdd content="Page 2"></PageOdd>
        </PageIndex>
        <PageIndex pageIndex={2}>
          <Page content="Page 3"></Page>
        </PageIndex>
        <PageIndex pageIndex={3}>
          <PageOdd content="Page 4"></PageOdd>
        </PageIndex>
      </PageScrollRaw>
    </div>
  );
}

export default App;
