export default function toPersianDigits(num) {
  const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
  const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const numStr = num.toString().replace(/,/g, "");

  return numStr
    .split("")
    .map(
      (c) =>
        persianNumbers[englishNumbers.indexOf(c)] ||
        arabicNumbers[persianNumbers.indexOf(c)] ||
        c
    )
    .join("");
}
