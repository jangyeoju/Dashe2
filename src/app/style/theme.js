const calcRem = (size) => `${size / 10}rem`;

const fontSizes = {
  t50: calcRem(50),
  t35: calcRem(35),
  t30: calcRem(30),
  t25: calcRem(25),
  t23: calcRem(23),
  t20: calcRem(20),
  t18: calcRem(18),
  t16: calcRem(16),
  t14: calcRem(14),
  t12: calcRem(12),
  t10: calcRem(10),
  t9: calcRem(9),
};

const deviceSizes = {
  mobile5: 320,
  mobile4: 360,
  mobile3: 480,
  mobile2: 768,
  mobile: 968,
  tablet: 1040,
  desktop2: 1380,
  desktop: 1720,
};

const colors = {
  primary: "#3C3C95",
  secondary: "#E17BAE",
  textColor: "#3b3b3b",
  secondaryTextColor: "#9F99A8",
  grayColor: "#F5F6F8",
  grayColor2: "#F5F6F8"
};

const device = {
  mobile: `(max-width : ${deviceSizes.mobile}px)`,
  mobile2: `(max-width : ${deviceSizes.mobile2}px)`,
  mobile3: `(max-width : ${deviceSizes.mobile3}px)`,
  mobile4: `(max-width : ${deviceSizes.mobile4}px)`,
  mobile5: `(max-width : ${deviceSizes.mobile5}px)`,
  tablet: `(max-width : ${deviceSizes.tablet}px)`,
  desktop2: `(max-width : ${deviceSizes.desktop2}px)`,
  desktop: `(max-width : ${deviceSizes.desktop}px)`,
};


const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export default theme;
