////////////
// PART ONE
////////////

//1. 

function strike() {
  let message = document.querySelector('li')
  message.style.textDecoration = 'line-through'
}

//2.

strike();

//3. 

  function setImage(id, url) {
    let img = document.querySelector(id);
    img.src = url;
    img.style.height = "200px"
}

//4. 

setImage('#image-1', 'https://exploringthebusinessbrain.com/wp-content/uploads/2020/08/warrior.png')
setImage('#image-2', 'https://exploringthebusinessbrain.com/wp-content/uploads/2020/08/warrior.png')
setImage('#image-3', 'https://exploringthebusinessbrain.com/wp-content/uploads/2020/08/warrior.png')


//5. 

function removeFirst() {
  let message = document.querySelector('#arguments li');
  message.remove()
}

removeFirst();


//6.

removeFirst();


//7. 

function quack(fontSize, id) {
  let text = document.querySelector(id)
  text.style.fontSize = fontSize
}

quack(`40px`, '#quack');
quack('20px', '#copy p');


///////////
// PART TWO
////////////

//1.

let newElement = document.createElement('li');
newElement.innerText = "Woah!!"

function addChild(element) {
let list = document.querySelector('#arguments');
list.appendChild(element)
}

addChild(newElement);

//2.

let newImage = document.createElement('img');
newImage.src = 'https://www.pennmedicine.org/cancer/-/media/images/miscellaneous/face%20and%20body/woman_meditating_sunset.ashx?mw=376&bc=f4f4f4'

addChild(newImage)

//3. 

function modifyImage(img) {
  img.style.height = '30px'
}

//4. 

// I modified a created image and an existing image. 
let image1 = document.querySelector('#image-1')

modifyImage(newImage);
modifyImage(image1)

//5. 

function invisible(element) {
let element1 = document.querySelector(element)
  element1.className = 'invisible'
}

//6.

invisible('#heading');


//////////////
// PART THREE
//////////////

//1.

function textCreator(text) {
  let listItem = document.createElement('li');
  listItem.innerText = text
  return listItem;
}

//2. 

let testItem = textCreator(`Hey, pal! WITW are you doing?!`)

addChild(testItem);


//3. 

function newHeader(hSize, text) {
    
  let header = document.createElement(`h${hSize}`);
  header.innerText = text;
  return header
}

//4.

let headerTest = newHeader('3', 'some text');

addChild(headerTest)