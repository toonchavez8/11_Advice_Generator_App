//  declare the variable and assign the value with document.getElementById()

const adviceBtn = document.getElementById("adviceBtn");
const adviceId = document.querySelector(".advice-Id");
const adviceText = document.querySelector(".advice-Text");

const fetchData = async () => {
  const api_call = await fetch("https://api.adviceslip.com/advice");
  //convert the data to json format
  const data = await api_call.json();
  //destructure the data
  const { slip } = data;
  //display the data in the html page
  adviceId.innerHTML = `#${slip.id}`;
  adviceText.innerHTML = `"${slip.advice}"`;
};

//call the function
fetchData();
adviceBtn.addEventListener("click", fetchData); 
//call the function when the button is clicked
