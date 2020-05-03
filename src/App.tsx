import React, { useEffect, useState } from "react";
// import AOS from "aos";
import ReactPageScroller from "react-page-scroller";
// import "aos/dist/aos.css"; // You can also use  for styles
// import "./App.css";
import { Page } from "./components/Page";

// https://samuelweber.at/article/how-to-use-aos-js-in-your-project

function App() {
  const [state, setState] = useState<number | null>(null);

  const handlePageChange = (number: number) => {
    setState(number); // set currentPage number, to reset it from the previous selected.
  };
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
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={state}
      >
        <Page effect="zoom-in" content="Zoom In"></Page>
        <Page effect="fade-left" content="Fade Left"></Page>
      </ReactPageScroller>
    </div>
  );
}

export default App;
