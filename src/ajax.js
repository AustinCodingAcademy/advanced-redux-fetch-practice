import "whatwg-fetch";

fetch("http://localhost:4000/products").then((response) => {
  console.log("Execute when data is retrieved", response);
});

fetch("http://localhost:4000/comments").then((response) => {
  console.log("Execute when data is retrieved", response);
});

const testThunk = () => {
  return 1 + 3;
};
