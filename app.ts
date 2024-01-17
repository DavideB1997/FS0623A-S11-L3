/* Cos'è TypeScript:
TypeScript è una versione con tipizazzione statica di JavaScript, cioè, è possibile specificare il tipo di dato di una variabile.

A cosa Serve?
Consentendo di specificare il tipo di dato della variabili, parametri e ritorno delle funzione, aiuta a rilevare ed evitare eventuali errori durante la fase di sviluppo.

Che problema risolve TypeScript?
Javascript è un linguaggio tipizzato dinamicamente, cio i tipi di dati sono risolti al runtime, questo porta ad errori e misinterpretazioni da parte di JavaScript. Con la tipizazzione statica dei TypeScript si evitano questi errori e migliora la qualità del codice.

Differenze con JavaScript:
1 tipizazzione statica,
2 oggetti e classi più avanzati
 
Il compilatore TS
Perché è necessario?
Il compilatore TS converte il codice scritto in Typescript in codice JavaScript, dato che non può essere eseguito nei browser.

Come si usa?
Una volta installato  con il comando da terminale " npm i -g typescipt " , si crea e scrive un file .ts , e si compila con il comando in terminale " tsc nomeFile.ts ", una volta fatto questo si avrà un file Javascript che si può includere direttamente nel file HTML

Type inference 
è la capacità di typeScript di dedurre automaticamente il tipo di una variabile basandosi sul suo valore, aiuta a diminuire la quantità di codice necessaria per specificare i tipi e aiutando la leggibilità */

let stringa : string
let numero : number
let boolean: boolean

// Tipo "Any"
// Any, ogni valore indefinito prende il valore any, in piu Any è come come Javascript, prende tutti i tipi di valore.

let any : any

any=5;
any="ciao";

// Tipo "Union"
// Un valore può prendere più tipi di dato, specificando con | i valori accetati.

let union : number | string

union = "verde"
union = 32

// Tipo "tuples"
// Per avere array con determinati tipi di dato e una lunghezza predefinita.

let tuples : [string, number]
tuples = ["giallo", 42]

// Type interface
// Serve per definire un oggetto o una classe i suoi tipi di dati prima di assegnare valori all'oggetto o della classe.

interface nuovoInterface {
   name:string;
   boolean:boolean
}

let nuovo: nuovoInterface= {
   name:"nuovo",
   boolean: true,
}

// I Generics 
// È un modo per crare componenti che lavorano con diversi tipi di dati. E' possibile scrivere funzioni,classi e interfacce che possono andattarsi ai vari tipi senza creare errori.

function qualcosa<T>(argomento: T): T {
   return argomento
}

console.log(qualcosa(3))