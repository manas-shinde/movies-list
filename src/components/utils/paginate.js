import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startPageNumber = (pageNumber - 1) * pageSize;

  return _(items).slice(startPageNumber).take(pageSize).value();
}
