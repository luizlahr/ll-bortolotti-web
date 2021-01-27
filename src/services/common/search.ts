import { filter } from "utils/filter";

export const Search = (data: [], term: string, searchFields: string[], cb: ([]) => void) => {
  if (!data) {
    cb(data);
  };
  cb(filter(data, term, searchFields));
}