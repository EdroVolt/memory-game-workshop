const imgsArray = [
  "images/cheeseburger.png",
  "images/fries.png",
  "images/hotdog.png",
  "images/ice-cream.png",
  "images/milkshake.png",
  "images/pizza.png",
  "images/cheeseburger.png",
  "images/fries.png",
  "images/hotdog.png",
  "images/ice-cream.png",
  "images/milkshake.png",
  "images/pizza.png",
];

let count = 0;
let selectedImages = [];
let score = 0;

imgsArray.sort(() => .5 - Math.random());

for (let index = 0; index < imgsArray.length; index++) {
  const img = document.createElement("img");
  img.setAttribute('src', 'images/blank.png');
  img.setAttribute('class', 'image')

  img.addEventListener('click', () => {
    img.setAttribute('src', imgsArray[index]);
    count += 1;
    selectedImages.push(img);

    if(count === 2){
      if(selectedImages[0] === selectedImages[1]){
        setTimeout(() => {
          alert('you have clicked the same image')
          for (let index = 0; index < selectedImages.length; index++) {
            selectedImages[index].setAttribute('src', '/images/blank.png');
          }
          selectedImages = [];
          count = 0;
        }, 10)
      }
      else if(selectedImages[0].src === selectedImages[1].src){
        score += 1;
        count = 0;
        setTimeout(() => {
          alert('anta tmam keda')
          for (let index = 0; index < selectedImages.length; index++) {
            selectedImages[index].setAttribute('src', '/images/white.png');
          }
          selectedImages = [];
        }, 10)
      }else{
        score -= 1;
        count = 0;
        setTimeout(() => {
          alert('anta mesh tmam')
          for (let index = 0; index < selectedImages.length; index++) {
            selectedImages[index].setAttribute('src', '/images/blank.png');
          }
          selectedImages = [];
        }, 10)
      }
    }

    const scoreElement = document.querySelector('.score');
    scoreElement.innerHTML = 'Score: ' + score ;
  })

  const container = document.getElementsByClassName('container')[0];
  container.appendChild(img);
}




