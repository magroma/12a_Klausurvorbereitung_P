/* DATENSTRUKTUREN */

/* Primitives */

// JavaScript ist eine untypisierte Sprache. Variablentypen müssen nicht engegeben werden.

// let a; // var - Definition oder Deklaration

// a; // undefined
// console.log(a);
// console.log(typeof a);

// a = true; // Boolean (true, false)
// console.log(a);
// console.log(typeof a);

// a = "Hallo"; // string
// console.log(a);
// console.log(typeof a);

// a = 2; // number
// console.log(a);
// console.log(typeof a);

// ------------------------------------------

/* Arrays */
// let arr = new Array();
// let arr;
// arr = [false,true,false];
// arr = ["a","b","c","d"];

// //Index beginnt mit 0
// console.log(arr);
// console.log(arr[0]); // Angabe des Indexes um sich den Wert an der jeweiligen Stellen anzuzeigen
// console.log(arr[3]);
// console.log(arr.length); // Länge des Arrays

// console.log(arr[arr.length - 1]); // Arraylänge minus "x" gibt das Element an der jeweiligen Stelle aus.
// console.log(arr.length[7]); // Ausgabe "undefined", KEINE Fehlermeldung.

// ------------------------------------------

/* Array - Info */
// Arrays schrittweise Auffüllen und Leeren (NICHT Klausurrelevant!!!)
// let arr = [];
// console.log(arr);
// arr.push("a"); // push zum Füllen
// console.log(arr);
// arr.push("b");
// console.log(arr);
// console.log(arr.pop()); // pop zum Leeren (letzter zugefügter Wert wird als erstes wieder entfernt)
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */

// let obj; // Definieren / Deklarieren der Variable

// obj = {}; // Erzeugen des Objektes
// console.log(obj);

// obj = {x:10, y:"Hallo", z:true}; // Füllen des Objektes mit Werten
// console.log(obj);
// console.log(obj.y);

// obj =   {
//             val01:"Moin",
//             sub1:{
//                     val1:"Hallo",
//                     val2:2
//             }
//         }

// // {{{  }}} ... nested oject / hierarchisch aufgebaut
// console.log(obj);
// console.log(obj.val01);
// console.log(obj.sub1.val1); // Ausgabe des abgefragten Wertes!
// console.log(obj.sub1.val2);

/*       DOM        */

// DOM --> Modell der HTML-Struktur
// DOM --> Document Object Model
// nach dem Parsen / Laden der HTML-Seite steht das DOM zur Verfügung!

// console.log(document); // Zeigt die komplette HTML-Struktur der Seite an!
// console.log(document.body); // Zeigt den "Ausschnitt" body der HTML-Seite an
// console.log(document.body.children); // Zeigt alle "Kinder" im body der HTML-Seite an
// console.log(document.body.children[0]); // Zeigt ein "Kind" beim jeweiligen Index im body der HTML-Seite an
// console.log(document.body.children[0].innerHTML); // ... Text ohne  HTML-Struktur
// document.body.children[0].innerHTML = "Hallo!"; // Text innerhalb der Struktur ändern!
// console.log(document.getElementById("test").innerHTML); // Element anhand der ID anzeigen lassen.

// ---------------------------------------------

/* ENTSCHEIDUNGSSTRUKTUREN */

// let cond;

// cond = (6 > 4);
// console.log(cond);
// cond = (6 < 4);
// console.log(cond);
// cond = (4 == 4);
// console.log(cond);

// cond = (4 == "4"); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert und Typ!

// console.log(cond);

// if (6 > 4) {
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch");
// }

// if - else if | switch()

// ---------------------------------------------

/* Funktionen */
// 1. Kapselung
// test(); // Funktionscall
// function test() { // Funktionsrumpf
//     console.log("Testausgabe");
// }

// // 2. Return

// function test() { // Funktionsrumpf
//     let ausgabe = "Testausgabe";
//     return ausgabe; // Lieferung an die Stelle des calls
//     console.log("Hallo"); // nach return Funktionsabbruch
// }

// 3. Parameter
// function test(firstName) { // Parameter (p1, p2, ..., pN)
//     // macht irgend etwas
//     let ausgabe = "Hallo " + firstName + "!";
//     return ausgabe
// }

// console.log(test("Anna"));
// Argumente (Daten) --> Parameter (Platzhalter)

// 4. Fkt-Call

// function test(firstName) { // Parameter
//     let ausgabe = grussformel() + firstName + "!"
//     return ausgabe
// }

// function grussformel() {
//     return "Hola, "
// }

// console.log(test("Anna")); // call
