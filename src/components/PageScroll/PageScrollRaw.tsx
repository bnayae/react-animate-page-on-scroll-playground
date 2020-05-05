import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import { IWithClassName } from "../IWithClassName";
import { IWithChildren } from "../IWithChildren";
import { IPageContext, PageContext } from "../../Hooks/PageContext";

interface IProps extends IWithChildren, IWithClassName {}

export const PageScrollRaw = ({ children }: IProps) => {
  const [index, setIndex] = useState<number>(0);

  const initValue: IPageContext = {
    pageIndex: index,
    setPgeIndex: setIndex,
  };

  const handlePageChange = (number: number) => {
    setIndex(number); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    //let y = 0;
    for (let i = 0; i < 4; i++) {
      const cls = `nav-bullet ${i === index ? "zoom" : ""}`;
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
    <PageContext.Provider value={initValue}>
      <div className="scroller-layout">
        <div className="scroller">
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={index}
          >
            {children}
          </ReactPageScroller>
        </div>
        <div className="scroller-nav">{pagesNumbers}</div>
      </div>
    </PageContext.Provider>
  );
};
