// title
export const sliceTitle = (title) => {
  const result = title.length > 30 ? title.slice(0, 30) + "..." : title;
  return result;
};

// api url
export const makeUrl = (path) => {
  let url = `http://localhost:5000/api${path}`;
  return url;
};

// Use Params
export const useParams = () => {
  const queryParams = window.location.search;
  const parse = new URLSearchParams(queryParams);
  const queris = [...parse];
  const obj = {};

  queris.forEach((query) => {
    obj[query[0]] = query[1];
  });
  return obj;
};

const loader = () => {

  return (`
  <div class="spinner" >
    <img src="../img/spinner.gif" alt="">
  </div>`);
}
export default loader;