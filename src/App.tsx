import React, { useEffect, useState } from "react";
// import AOS from "aos";
import ReactPageScroller from "react-page-scroller";
// import "aos/dist/aos.css"; // You can also use  for styles
import "./App.css";
import { Page, PageOdd } from "./components/Page";

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

  const getPagesNumbers = () => {
    const pageNumbers = [];

    //let y = 0;
    for (let i = 0; i < 4; i++) {
      const cls = `nav-bullet ${i === state ? "zoom" : ""}`;
      //y += 50;
      pageNumbers.push(
        <div
          className={cls}
          key={"circle_" + i}
          onClick={(_e) => handlePageChange(i)}
        >
          <svg
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            height="1.3rem"
            className="svg"
          >
            <circle
              cx="50%"
              cy="50%"
              r="4"
              fill="#2106"
              stroke="#4445"
            ></circle>
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              alignment-baseline="central"
              font-family="Arial, Helvetica, sans-serif"
              font-size="5"
              fill="#fff7"
            >
              {i + 1}
            </text>
          </svg>
        </div>
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();
  return (
    <div className="App">
      <div className="scroller-layout">
        <div className="scroller">
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={state}
          >
            <Page content="Page 1" selected={state === 0}></Page>
            <PageOdd content="Page 2" selected={state === 1}></PageOdd>
            <Page content="Page 3" selected={state === 2}></Page>
            <PageOdd content="Page 4" selected={state === 3}></PageOdd>
          </ReactPageScroller>
        </div>
        <div className="scroller-nav">{pagesNumbers}</div>
      </div>
    </div>
  );
}

export default App;
