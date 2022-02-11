let logData = (event) => {
    this.event.preventDefault();
    let data = {};
    console.log('this', this.event.target.id);
    var elem = document.getElementById(this.event.target.id).elements;
      for(var i = 0; i < elem.length; i++)
        if(elem[i].name === "" || elem[i].value === "Submit"){console.log(elem[i].name)}
        else {
          data[elem[i].name] = elem[i].value; 
        }
        console.log('data', data);   
    }

/*function logData(event) {
  event.preventDefault();
  var data = document.getElementById("form1");
  console.log(data.value);
}
//var data = {fname: "Jason", lname: "Sinn", email: 'test@me.com', phone: '098-765-4321', address: {street: "some street", city: "austin", state: "TX", zip: "78613"}}

const addNewCustomer = addDoc(customerCollection, data)
.then(docRef => {
  console.log("Document written with ID: ", docRef.id);
});*/

/*getDocs(customerCollection)
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data())
    })
  });*/

/*const docRef = doc(db, 'boatRegistrationNumber', "TX-1234-AB");
const docSnap = getDoc(docRef);

docSnap.then(value => {console.log('data', value.id)})*/

/*if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
};*/