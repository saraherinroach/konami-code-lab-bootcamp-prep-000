const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body')
  let index = 0;
  function onDownKeyHandler(e) {
    const which = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else{
      index = 0;
    }
  }
}




