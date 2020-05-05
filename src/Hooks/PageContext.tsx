import React, { createContext, useState, useContext } from "react";
import { IWithChildren } from "../components/IWithChildren";

// todo: break into files

export interface IPageContext extends IPageIndex {
  setPgeIndex: (index: number) => void;
}

export interface IPageIndex {
  pageIndex: number;
}

const empty: IPageContext = {
  pageIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPgeIndex: (_index: number) => {},
};

export const PageContext = createContext<IPageContext>(empty);
export const PageIndexContext = createContext<number>(0);

export const PageContextProvider = ({ children }: IWithChildren) => {
  const [index, setIndex] = useState<number>(0);
  const initValue: IPageContext = {
    pageIndex: index,
    setPgeIndex: setIndex,
  };

  return (
    <PageContext.Provider value={initValue}>{children}</PageContext.Provider>
  );
};

// export function usePageIndex(): number {
//   const context = useContext<IPageContext>(PageContext);

//   return context.pageIndex;
// }

// export function useIsSelected(index: number): boolean {
//   const context = useContext<IPageContext>(PageContext);

//   return context.pageIndex === index;
// }

export const PageIndex = ({
  children,
  pageIndex,
}: IWithChildren & IPageIndex) => {
  return (
    <PageIndexContext.Provider value={pageIndex}>
      {children}
    </PageIndexContext.Provider>
  );
};

export function usePageClass(classes?: string[]): string {
  const context = useContext<IPageContext>(PageContext);
  const meIndex = useContext<number>(PageIndexContext);

  const selected = context.pageIndex === meIndex;
  const targetClasses = (classes && classes.join(" ")) || "";
  return selected ? `active-page ${targetClasses}` : targetClasses;
}
