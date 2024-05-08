/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children } from "react";

type Props = {
  of: any[];
  render: (item: any, index: number) => React.ReactNode;
};

function EachElement({ of, render }: Props) {
  return Children.toArray(of.map((item, index) => render(item, index)));
}

export default EachElement;
