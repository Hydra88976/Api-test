fetch('https://www.york.ac.uk', {
  method: 'GET', // or 'PUT', 'PATCH', etc.
  
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // or response.text(), depending on expected response
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});

