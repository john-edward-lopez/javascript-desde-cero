// destructuracion o destructuring

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

const rect = tecnologias[3];

console.log(rect);

const [html, css, JavaScript] = tecnologias;

console.log(css);

//destructuring pero sin tener los elementos en orden de el areglo

const [, , , React] = tecnologias;

console.log(React);
