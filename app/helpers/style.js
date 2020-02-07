// @flow

// import type {
//   StandardLonghandProperties,
//   StandardShorthandProperties,
//   VendorLonghandProperties,
//   VendorShorthandProperties,
//   SvgProperties,
// } from 'csstype';

// export type Properties = {
//   ...$Exact<StandardLonghandProperties<number>>,
//   ...$Exact<StandardShorthandProperties<number>>,
//   ...$Exact<VendorLonghandProperties<number>>,
//   ...$Exact<VendorShorthandProperties<number>>,
//   ...$Exact<SvgProperties<number>>,
// };

// export type Interpolation =  false | null | void;

export type Sheet = { [string]: {} };

export const cx = (...interpolations: any[]): any =>
  // $FlowFixMe Boolean remove falsy values, not infered like that
  interpolations.filter(Boolean).reduce((acc, el) => ({ ...acc, ...el }));

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r: number = parseInt(hex.slice(1, 3), 16);
  const g: number = parseInt(hex.slice(3, 5), 16);
  const b: number = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
