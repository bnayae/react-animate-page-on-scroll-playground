import styled from "styled-components";
import { PageARaw } from "./PageRaw";

export const Page = styled(PageARaw)`
  font-size: 1.5em;
  /* text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-items: center; */
  color: palevioletred;
  /* height: 80vh; */
  background: #fed;
  height: 100%;
`;

export const PageOdd = styled(Page)`
  background: #d8a;
  color: #030;
`;
