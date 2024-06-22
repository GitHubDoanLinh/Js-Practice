const imgContainer = document.querySelector('.images');

const wait = function(second) {
  return new Promise(function(resolve) {
    setTimeout(resolve, second * 1000);
  });
};
const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function() {
      reject(new Error('Image not found'));
    });
  });
};

let currentImage;
createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(3);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg')
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(3)
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-3.jpg')
  })
  .then(img => {
    currentImage = img;
    console.log('Image 3 loaded');
    return wait(3)
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/myBabyNiece.jpg')
  })
  .then(img => {
    currentImage = img;
    console.log('image 4 loaded');
    return wait(3);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/myNiece.jpg')
  })
  .then(img => {
    currentImage = img;
    console.log('image 5 loaded');
    return wait(3);
  })
  .catch(err => console.log(err));
