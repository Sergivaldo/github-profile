import * as Api from "./modules/api.js";
import * as Profile from "./modules/profile.js";
const profile_container = document.getElementById("profile-container");

const show_profile = async () => {
  const search_input = document.getElementById("search");
  const response_data = await Api.get_user_prof(search_input.value);
  const status = response_data.status;
  const user_profile = await response_data.data;

  clear_screen();
  if (status == 200) {
    const profile_element = Profile.create_profile(user_profile);
    profile_container.appendChild(profile_element);
  } else {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const i = document.createElement("i");
    i.setAttribute('class','fa-solid fa-user-xmark error-icon')
    div.classList.add("message__box");
    span.classList.add("message--error");
    span.innerHTML = "Profile not found";

    div.appendChild(i);
    div.appendChild(span);
    profile_container.appendChild(div);
  }

  search_input.value = "";
};

const clear_screen = () => {
  const divs = profile_container.querySelectorAll("div");

  divs.forEach((el) => el.remove());
};

const initial_message = ()=>{
    const div = document.createElement("div");
    const span = document.createElement("span");
    const i = document.createElement("i");
    i.setAttribute('class','fa-regular fa-circle-user initial-icon')
    div.classList.add("message__box");
    span.classList.add("message--initial");
    span.innerHTML = "Search<br>a GitHub Profile";

    div.appendChild(i);
    div.appendChild(span);
    profile_container.appendChild(div);
}


const search_form = document.getElementById("search_form");

search_form.addEventListener("submit", (btt) => {
  btt.preventDefault();
  show_profile();
});


window.addEventListener('load',initial_message())