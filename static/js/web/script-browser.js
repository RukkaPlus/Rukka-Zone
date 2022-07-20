function altElement0() {
  let element = document.getElementById("element-0");
  element.innerHTML = 'Fui alterado por Javascript';
}
function altElement1A() {
  let element = document.getElementById("element-1");
  element.src = '/static/other/example-js-1.gif';
}
function altElement1B() {
  let element = document.getElementById("element-1");
  element.src = '/static/other/example-js-0.gif';
}
function altElement2() {
  let element = document.getElementById("element-2");
  element.style.fontSize = "35px";
}
function altElement3A() {
  let element = document.getElementById("element-3");
  element.style.visibility = 'hidden';
}
function altElement3B() {
  let element = document.getElementById("element-3");
  element.style.visibility = 'visible';
}
function form0() {
  let elementValue = document.forms["example-form-0"]["example-input"].value;
  if (elementValue == "") {
    alert('Necesitas llenar el campo');
    return false;
  } else if (elementValue == "Lucca" || elementValue == "Rukka") {
    alert('Pero por su mecha. Que hace un dios aca?');
  }
}
function altElement4() {
  let elementH = document.getElementById("element-4A");
  let elementW = document.getElementById("element-4B");
  elementH.innerHTML = window.innerHeight;
  elementW.innerHTML = window.innerWidth;
}
function altElement5() {
  let elementW = document.getElementById("element-5A");
  let elementH = document.getElementById("element-5B");
  let elementAW = document.getElementById("element-5C");
  let elementAH = document.getElementById("element-5D");
  let elementC = document.getElementById("element-5E");
  let elementP = document.getElementById("element-5F");
  elementW.innerHTML = screen.width;
  elementH.innerHTML = screen.height;
  elementAW.innerHTML = screen.availWidth;
  elementAH.innerHTML = screen.availHeight;
  elementC.innerHTML = screen.colorDepth;
  elementP.innerHTML = screen.pixelDepth;
}
function altElement6() {
  let elementURL = document.getElementById("element-6A");
  let elementHN = document.getElementById("element-6B");
  let elementPN = document.getElementById("element-6C");
  let elementProtocol = document.getElementById("element-6D");
  elementURL.innerHTML = window.location.href;
  elementHN.innerHTML = window.location.hostname;
  elementPN.innerHTML = window.location.pathname;
  elementProtocol.innerHTML = window.location.protocol;
}
function newPage() {
  window.location.assign("https://www.example.com/");
}
function altElement7() {
  let elementC = document.getElementById("element-7A");
  let elementUA = document.getElementById("element-7B");
  let elementUL = document.getElementById("element-7C");
  let elementOL = document.getElementById("element-7D");
  elementC.innerHTML = navigator.cookieEnabled;
  elementUA.innerHTML = navigator.userAgent;
  elementUL.innerHTML = navigator.language;
  elementOL.innerHTML = navigator.onLine;
}
function popup0() {
  alert('Hello, world!');
}
function popup1() {
  let result = confirm('Are you here?');
  if (result)
    alert('Hello, world!');
}
function popup2() {
  let result = prompt('What is your name?', 'world');
  if (result != null && result != "")
    alert('Hello, ' + result + '!');
  else
    alert('Hello, world!');
}
function form1() {
  let input = document.forms["example-form-1"]["example-input"];
  if (!input.checkValidity()) {
    alert(input.validationMessage);
  } else {
    alert("Input OK");
  }
}
function altElement8() {
  let element = document.getElementById("element-8");
  element.innerHTML = "Espera 3 segundos...";
  setTimeout(() => element.innerHTML = "Hello, world!", 3000);
}
function altElement9() {
  let element = document.getElementById("element-9"),
      pos = 0,
      interval,
      intervalFunction = () => {
    if (pos == 225) {
      clearInterval(interval);
    } else {
      pos++;
      element.style.transform = `translate(${pos}px)`;
    }
  }
  interval = setInterval(intervalFunction, 10);
}
function geolocationExample() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser");
  }
  function showPosition(position) {
    alert("Latitud: " + position.coords.latitude +
      "\nLongitud: " + position.coords.longitude);
  }
}
function altElement10() {
  let element = document.getElementById("element-10");
  const url = '/static/other/example.json';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      element.innerHTML = `<p>${data.name}</p>
        <p>Programming languages: ${data.language}</p>
        <img src="/${data["image-0"]}">
        <img src="/${data["image-1"]}">`;
    }).then(() => {
      let text = element.getElementsByTagName('p')[0];
      let image0 = element.getElementsByTagName('img')[0];
      let image1 = element.getElementsByTagName('img')[1];
      text.style.textAlign = "center";
      text.style.backgroundColor = "rgba(0, 0, 0, .1)"
      image0.style.display = "inline-block"; image1.style.display = "inline-block";
      image0.style.objectFit = "contain"; image1.style.objectFit = "contain";
      image0.style.height = "150px"; image1.style.height = "150px";
      image0.style.width = "49%"; image1.style.width = "49%";
    }).catch(err => console.error(err));
}
function altElement11() {
  let element = document.getElementById("element-11");
  const url = '/static/other/example.json';
  axios.get(url)
    .then(res => {
      element.innerHTML = `<p>${res.data.name}</p>
        <p>Programming languages: ${res.data.language}</p>
        <img src="/${res.data["image-0"]}">
        <img src="/${res.data["image-1"]}">`;
    }).then(() => {
      let text = element.getElementsByTagName('p')[0];
      let image0 = element.getElementsByTagName('img')[0];
      let image1 = element.getElementsByTagName('img')[1];
      text.style.textAlign = "center";
      text.style.backgroundColor = "rgba(0, 0, 0, .1)"
      image0.style.display = "inline-block"; image1.style.display = "inline-block";
      image0.style.objectFit = "contain"; image1.style.objectFit = "contain";
      image0.style.height = "150px"; image1.style.height = "150px";
      image0.style.width = "49%"; image1.style.width = "49%";
    }).catch(err => console.error(err));
}
function altElement12() {
  const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
  const canvas = document.getElementById('element-12');
  const ctx = canvas.getContext('2d');
  canvas.height = canvas.width;
  ctx.transform(1, 0, 0, -1, 0, canvas.height);

  ctx.fillStyle = "blue";
  for (let i = 0; i < xArray.length-1; i++) {
    let x = xArray[i] * 200 / 150;
    let y = yArray[i] * 200 / 15;
    ctx.beginPath();
    ctx.ellipse(x, y, 2, 3, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}