const dbName = "jara_example"
const request = window.indexedDB.open(dbName)
let db = null 

// This is what our customer data looks like.
const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];

const comments = [
    {
        comment : "Fix the issues that is bugging your system"
    },
    {
        comment : "What is all these nonsense happening on your app?"
    }
]

  
request.onerror = event => {
    console.log(`Database Error: ${event.target.errorCode}`)
}

//Indexdb uses object stores 
// Object store => Storage container for related data 
// value => Any data type 
// Each instance within a store has an associated identifier that is created either 
// via key path or key generator 

request.onsuccess = event => {
    db = event.target.result 
}

request.onupgradeneeded = event => {
    const database = event.target.result 

    const customerStore = database.createObjectStore("customers" , {
        keyPath : "ssn"
    }) 

    customerStore.createIndex("email" , "email" , {unique : true}) 

    customerData.map(customer => customerStore.add(customer)) 

    const commentStore = database.createObjectStore("comments" , {
        autoIncrement : true
    }) 

    comments.map(comment => commentStore.add(comment)) 

    
}
