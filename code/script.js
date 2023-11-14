// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const accordionEl = document.getElementById("accordion");

//fetch
async function getAccordion() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  //loop med forEach
  data.forEach((accordion) => {
    const postsEl = document.createElement("div");
    const postsElDesc = document.createElement("div");

    postsEl.addEventListener("click", toggle);

    postsEl.setAttribute("class", "title");
    postsEl.setAttribute("id", "section" + `${accordion.id}`);
    postsElDesc.setAttribute("class", "description");

    postsEl.innerHTML = `Title: ${accordion.title}`;
    postsElDesc.innerHTML = `<p>${accordion.body}</p>`;

    accordionEl.appendChild(postsEl);
    accordionEl.appendChild(postsElDesc);
  });
  console.log(data);
}
getAccordion();

//Adams fetch code
/* 
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((posts) => {
    const postsEl = document.createElement("div");
    const postsElDesc = document.createElement("div");
    postsEl.setAttribute("class", "title");
    postsEl.setAttribute("id", "section" + `${posts.id}`);
    postsElDesc.setAttribute("class", "description");
    postsEl.innerHTML = `${posts.title}`;
    postsElDesc.innerHTML = `<p>${posts.body}</p>`;

    accordionEl.appendChild(postsEl);
    accordionEl.appendChild(postsElDesc);

    postsEl.addEventListener("click", toggle);
  });
}

getPosts(); 
*/
