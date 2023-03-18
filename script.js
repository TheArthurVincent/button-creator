const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  console.log(name);
  console.log(btn.style);

  if (name === "fontFamily") {
    return (btn.style.fontFamily = value);
  }
  if (name === "fontSize") {
    return (btn.style.fontSize = value + "rem");
  }

  if (name === "width") {
    return (btn.style.width = value + "px");
  }

  if (name === "height") {
    return (btn.style.height = value + "px");
  }
  if (name === "backgroundColor") {
    return (btn.style.backgroundColor = value);
  }
  if (name === "color") {
    return (btn.style.color = value);
  }
  if (name === "border") {
    return (btn.style.border = value);
  }
  if (name === "borderRadius") {
    return (btn.style.borderRadius = value + "px");
  }
  if (name === "texto") {
    console.log((btn.innerHTML = value));
  }
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys;
  console.log(setValues().properties);
}

console.log(localStorage);
