const logoutButton = document.querySelector("#sign-out");
const toggleAuthDisplayOn = () => {
  console.log("toggle on");
  document.querySelector(".sign-in-container").style.display = "none";
  document.querySelector(".sign-out-container").style.display = "flex";
};
const toggleAuthDisplayOff = () => {
  console.log("toggle off");
  document.querySelector(".sign-in-container").style.display = "flex";
  document.querySelector(".sign-out-container").style.display = "none";
};

window.onload = (event) => {
  console.log("Checking to see if already logged in");
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);
  console.log("data", data);
  if (data.email !== undefined) {
    console.log("YES");
    toggleAuthDisplayOn();
    document.querySelector("#user-email").innerHTML = data.email;
    // document.querySelector(".sign-in-container").style.display = "none";
    // document.querySelector(".sign-out-container").style.display = "flex";
  }
};

const handleLogout = () => {
  console.log("Logout");
  localStorage.removeItem("userData");
  toggleAuthDisplayOff();
};

logoutButton.addEventListener("click", handleLogout);
