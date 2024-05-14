// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

function palabraTool(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}

palabraTool("Camiseta");

function palabraToolTernario(word) {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLoweCase());
}

palabraToolTernario("corazón");

function verboConjugacion(word1, word2) {
  if (word1.endsWith("ar") && word2.endsWith("ar")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " también."
    );
  } else if (word1.endsWith("ar") && word2.endsWith("er")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " es de la segunda."
    );
  } else if (word1.endsWith("ar") && word2.endsWith("ir")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " es de la tercera."
    );
  } else if (word1.endsWith("er") && word2.endsWith("ar")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " es de la primera."
    );
  } else if (word1.endsWith("er") && word2.endsWith("er")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " también."
    );
  } else if (word1.endsWith("er") && word2.endsWith("ir")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " es de la tercera."
    );
  } else if (word1.endsWith("ir") && word2.endsWith("ar")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo " +
        word2 +
        " es de la primera."
    );
  } else if (word1.endsWith("ir") && word2.endsWith("er")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo " +
        word2 +
        " es de la segunda."
    );
  } else if (word1.endsWith("ir") && word2.endsWith("ir")) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo" +
        word2 +
        " también."
    );
  }
}

verboConjugacion("hervir", "amar");

function generateWord(wordA, wordB, wordC) {
  console.log(
    wordA.charAt(3) +
      wordA.charAt(2) +
      wordB.charAt(1) +
      wordB.charAt(3) +
      wordC.charAt(2) +
      wordC.charAt(1)
  );
}

generateWord("hola", "adios", "mano");

function generateMail(mail) {
  const findIt = mail.indexOf("@");
  const nameIs = mail.substring(0, findIt);
  const dominioIs = mail.substring(findIt + 1);
  console.log(`El nombre es ${nameIs}`);
  console.log(`El dominio es ${dominioIs}`);
}
generateMail("dorian@gmail.com");

function randomWord(word) {
  const randomNum = Math.random() * word.length;
  const letra = word.charAt(randomNum);
  console.log(letra);
}

randomWord("esquizoide");

function mayusMinus(palabra) {
  console.log(
    palabra.toLowerCase().charAt(0),
    palabra.toUpperCase().charAt(1),
    palabra.toLowerCase().charAt(2),
    palabra.toUpperCase().charAt(3),
    palabra.toLowerCase().charAt(4)
  );
}

mayusMinus("genio");

function fullName(name, surname) {
  const randomNum = Math.random().round(1. 100) * 101;
  console.log(name.charAt(0), surname, randomNum);
}

fullName("Carlos", "Lobo");
