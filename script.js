const body = document.querySelector("body");

const headline = document.createElement("h1");
headline.innerHTML = "Task Manager App";

const div_element = document.createElement("div");
div_element.id = "app";

body.append(headline);
body.append(div_element);
