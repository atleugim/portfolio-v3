export const joinArray = (array: Array<any>, locale = "en"): string => {
  const formatter = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  });
  return formatter.format(array);
};
