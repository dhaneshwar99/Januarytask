const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  // console.log("LIMIT", limit);
  // console.log("SIZE", size);
  const offset = parseInt(page) * parseInt(size) - parseInt(size);
  return { limit, offset };
};
const getPagingData = (allData, page, limit, records) => {
  const totalItems = parseInt(allData);
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, records, totalPages, currentPage };
};
module.exports = {
  getPagination,
  getPagingData,

};
