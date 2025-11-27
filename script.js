// array to store cities
const cities = [];

// clear output function
const clearoutput =()=>{
document.getElementById("output").innerHTML="";
}  

// Toastify error function

const Toastifyerror = () => {
  Toastify({
    text: "Please Enter Your Text",
    duration: 3000,
    style: {
      color: "white",
    
      background: "linear-gradient(to right, #dc3545, #ff4d4d)",
    },
  }).showToast();

};

 // print name function
function printName() {
  let input = document.getElementById("userInput").value.trim();

  if (input === "") {
  Toastifyerror();
 return;
  }
else {
  document.getElementById("output").innerHTML = "Hello, " + input + "!";
}

}

// add city function

function addcity() {
  const get_city = document.getElementById("userInput").value.trim();

if (get_city === "") {
    Toastifyerror();
    return; 
  } 

 let iscityfound = cities.includes(get_city);
 if (!iscityfound) {
    cities.push(get_city);
    
    Toastify({
        text: `${get_city} added!`,
        duration: 3000,
      style: { background: "green" },
    }).showToast();
  }
  else {
    Toastify({
      text: `${get_city} is already in the list!`,
        duration: 3000,
        style: { background: "red" },

    }).showToast();
  }
// print cities function
}


function printCity() { 
   clearoutput();

  for (let i = 0; i < cities.length; i++) {
    document.getElementById("output").innerHTML += cities[i] + "<br>";
  }

}

// check city function

function checkcity() {
  const check = document.getElementById("userInput").value;

  for (let i = 0; i < cities.length; i++) {
    if (check === cities[i]) {
      document.getElementById("output").innerHTML =
        check + " is found in the list. At index " + i;
      return;
    }
  }

  document.getElementById("output").innerHTML = "Not Found";
}

// clear all function

function clearall() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("userInput").value = "";
}


// let cnic = "35202-1234567-8";
// let formattedcnic = cnic.replaceAll("-","");
// console.log(formattedcnic);






