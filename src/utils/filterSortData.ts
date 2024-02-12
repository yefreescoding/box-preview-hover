import Messages from "../types/MyObjectTypes";

type Datum = {
  messages: Messages[];
  read: boolean;
  timestamp: string; // Assuming timestamp is a string, adjust as needed
  // Add other properties as needed
};

type FilterSortDataOptions = {
  filterOutRead?: boolean;
  sortByDate?: boolean;
};

export function filterSortData(
  data: Datum[],
  { filterOutRead = true, sortByDate = true }: FilterSortDataOptions = {}
): Datum[] {
  if (!data) return [];

  const filteredData = data.reduce((acc, dat) => {
    const { read } = dat;
    // sortByDate if true
    if (filterOutRead && read) return acc;

    // add dat to acc
    acc.push(dat);

    return acc;
  }, []);

  // Sort data by date
  if (sortByDate) {
    filteredData.sort(
      (a, b) => new Date(b.timestamp).getTime - new Date(a.timestamp).getTime
    );
  }

  console.log(filteredData);
  console.log(data);

  return filteredData;
}
