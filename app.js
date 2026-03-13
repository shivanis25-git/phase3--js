const amountInput = document.getElementById('amount');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.Tip');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');

const tipAmountSpan = document.getElementById('tipAmount');
const totalAmountSpan = document.getElementById('totalAmount');

const themeToggle = document.getElementById('themeToggle');

let selectedTip = 0;


tipButtons.forEach(tip => {
  tip.addEventListener('click', () => {
    tipButtons.forEach(t => t.classList.remove('active'));
    tip.classList.add('active');
    selectedTip = Number(tip.innerText.replace('%', ''));
  });
});



calculateBtn.addEventListener('click', () => {
  const amount = Number(amountInput.value);
  const people = Number(peopleInput.value);

  if (amount <= 0 || people <= 0 || selectedTip === 0) {
    alert('Please enter Tip ');
    return;
  }

  const tipTotal = (amount * selectedTip) / 100;
  tipAmountSpan.innerText = (tipTotal / people).toFixed(2);
  totalAmountSpan.innerText = ((amount + tipTotal) / people).toFixed(2);
});


resetBtn.addEventListener('click', () => {
  amountInput.value = '';
  peopleInput.value = '';
  selectedTip = 0;
  tipAmountSpan.innerText = '0';
  totalAmountSpan.innerText = '0';
  tipButtons.forEach(t => t.classList.remove('active'));
});


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});