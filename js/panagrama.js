function esPangrama(texto) {
    texto = texto.replace(/[^a-zA-Z]/g, "").toLowerCase(); 
    return new Set(texto).size >= 26; 
}

let texto = "abcdefghijklmnopqyzñ";

if (esPangrama(texto)) {
    console.log("El texto es un pangrama.");
} else {
    console.log("El texto no es un pangrama.");
}
