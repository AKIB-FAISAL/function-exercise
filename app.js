// Get form and list
const form = document.getElementById('studentForm');
const infoList = document.getElementById('infoList');

// when form submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop reload

  // get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  // check empty
  if(name === '' || email === '' || phone === '' || address === '') {
    alert('Please fill all fields!');
    return;
  }

  // create list item
  const li = document.createElement('li');
  li.textContent = `Name: ${name} | Email: ${email} | Phone: ${phone} | Address: ${address}`;

  // add to list
  infoList.appendChild(li);

  // clear form
  form.reset();
});

console.log("Student Data :", {name, email, phone, address});

