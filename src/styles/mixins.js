// 단위 px
export const responsiveValue = (
  property,
  maxSize,
  minSize,
  maxView,
  minView
) => `
  ${property}: calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minView}px) / (${maxView} - ${minView})));
  
  @media screen and (min-width: ${maxView}px) {
    ${property}: ${maxSize}px;
  }

  @media screen and (max-width: ${minView}px) {
    ${property}: ${minSize}px;
  }
`;
