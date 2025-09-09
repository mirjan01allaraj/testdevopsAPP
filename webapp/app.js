fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data');
    container.innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Gabim gjatë ngarkimit të JSON:', error);
  });
