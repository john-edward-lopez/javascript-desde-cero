//Fetch Api con Promises

const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((response) => {
    if (response.ok) {
      //console.log(response);
      return response.json();
    }
    throw new Error("Hubo un error");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
