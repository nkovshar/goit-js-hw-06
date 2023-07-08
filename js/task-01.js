const listEl = document.querySelector('#categories');
[...listEl.children].forEach(item => {
  console.log(`Number of categories: ${listEl.children.length}`);
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);

})
