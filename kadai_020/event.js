const text = document.getElementById('text');

const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});