type Dates = {
  startDate: string;
  endDate: string;
};

const extractDates = (customer: any): Dates[] | string => {
  if (
    !customer ||
    !customer.ListOfPeriods ||
    customer.ListOfPeriods == "NUlL" // Condition as per test cases
  ) {
    return [];
  }

  const periods = customer.ListOfPeriods.trim().split("|");
  const dates: any[] = [];

  for (const period of periods) {
    const [sD, eD] = period.split("-");

    if (sD.trim().length === 10 && eD.trim().length === 10)
      dates.push({ startDate: sD.trim(), endDate: eD.trim() });
    else dates.push("string length is invalid");
  }

  return dates;
};

export default extractDates;
