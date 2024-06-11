//performance y multiple  Await

const url = "https://jsonplaceholder.typicode.com/comments";

const url2 = "https://jsonplaceholder.typicode.com/todos";

const url3 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  try {
    const inicio = performance.now();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    const data = await response.json();
    console.log(data);

    const response2 = await fetch(url2);
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    const data2 = await response2.json();
    console.log(data2);

    const response3 = await fetch(url3);
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    const data3 = await response3.json();
    console.log(data3);

    const fin = performance.now();

    console.log(`El resultado de la primer funcion es :${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();

const consultarAPI2 = async () => {
  try {
    const inicio = performance.now();

    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);

    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);

    console.log(data);

    console.log(data2);

    console.log(data3);

    const fin = performance.now();

    console.log(`El resultado de la segunda funcion es :${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI2();