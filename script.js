// NOTE: I have used these kind of functions; because I don't want you all inspect these things...

(function(){
  let str = document.getElementById('str').innerHTML;
  str = str.split('');
  str = str.reverse();
  str = str.join('');

  document.getElementById('other').innerHTML = str.toString();
})();


/**
 * FORM
 */

(function(){
  let form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
  e.preventDefault();

  let string = document.getElementById('s').value;
  string = string.split('');
  string = string.reverse();
  string = string.join('');

  document.getElementById('result').innerHTML = string;
});
})();