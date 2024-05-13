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
  if (word1.endsWith("ar")&&(word2.endsWith("ar"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " también."
    );
  } else if (word1.endsWith("ar")&&(word2.endsWith("er"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " es de la segunda."
    );
  } else if (word1.endsWith("ar")&&(word2.endsWith("ir"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la primera conjugación, y el verbo " +
        word2 +
        " es de la tercera."
    );
  } else if (word1.endsWith("er")&&(word2.endsWith("ar"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " es de la primera."
    );
  } else if (word1.endsWith("er")&&(word2.endsWith("er"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " también."
    );
  } else if (word1.endsWith("er")&&(word2.endsWith("ir"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la segunda conjugación, y el verbo " +
        word2 +
        " es de la tercera."
    );
  } else if (word1.endsWith("ir")&&(word2.endsWith("ar"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo " +
        word2 +
        " es de la primera."
    );
  } else if (word1.endsWith("ir")&&(word2.endsWith("er"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo " +
        word2 +
        " es de la segunda."
    );
  } else if (word1.endsWith("ir")&&(word2.endsWith("ir"))) {
    console.log(
      "El verbo " +
        word1 +
        " es de la tercera conjugación, y el verbo" +
        word2 +
        " también."
    );
  }
}

verboConjugacion ('hervir', 'amar')
