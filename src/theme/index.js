const sizes = { tablet: "768px" };

export const device = {
  mobile: `(max-width: ${sizes.tablet})`,
  aboveTablet: `(min-width: ${sizes.tablet})`
};

export default {
  device
};
