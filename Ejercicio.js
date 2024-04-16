const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

let contador = 0;
while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

const saludar = () => "Hola mundo";
console.log(saludar());