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

const addData = (db , storeName , data) => {

    const transaction = db.transaction([storeName] , "readwrite") 
    const store = transaction.objectStore(storeName)
    const request = store.add(data)  

    request.onsuccess = event => console.log(request.result)

}

const getData = (db , storeName ,  key) => {
    const transaction = db.transaction([storeName] , "readonly") 
    const store = transaction.objectStore(storeName)
    const request = store.get(key)  

    request.onsuccess = event => console.log(request.result)
    request.onerror = event => console.log("There was an error")
}

const removeData = (db , storeName ,  key) => {
    const request = db
    .transaction([storeName] , "readwrite") 
    .objectStore(storeName)
    .delete(key)  

    request.onsuccess = event => console.log("It is gone")
    request.onerror = event => console.log("There was an error")
}

const updateData = (db , storeName ,  key , name) => {
    const objectStore = db
    .transaction([storeName] , "readwrite") 
    .objectStore(storeName)

    const request = objectStore.get(key)  

    request.onsuccess = event => {
        const data = event.target.result;

        data.age = 42 

        const requestUpdate = objectStore.put(data)

        requestUpdate.onsuccess = event => console.log("Updated")
    }
}

const getAll = (db , storeName) => {
    const objectStore = db
    .transaction([storeName] , "readwrite") 
    .objectStore(storeName)

    objectStore.getAll().onsuccess = (event) => {
        const result = event.target.result 

        console.log(`Got all customers: ${result.length}`);
        for (let n of result){
            console.log(n)
        }
    };
}

const searchByIndex = (db , indexName , key) => {
    const index = db.index(indexName)
    index.get(key).onsuccess = event => {
        console.log(event.target.result)
    }
}

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
    
    //Get an item 
    const storeName = "customers" 
    const keyToDelete = "123456"
    const keyToUpdate = "12345"

    getData(db , storeName, "1234567")
    removeData(db , storeName , keyToDelete)

    const newData = {
        name : "Donald Knuth"
    }

    //addData(db , "customers" , newData) 

    updateData(db,storeName,keyToUpdate,newData)
    //getAll(db,storeName) 
    searchByIndex(db ,  "email" , "bill@company.com")
    
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

request.onblocked = event => alert("Please, close all other tabs running this application")