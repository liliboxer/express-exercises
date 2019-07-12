const root = document.getElementById('root');
const dogsList = document.createElement('ul');

fetch('/api/v1/dog')
  .then(res => res.json())
  .then(dogs => {
    dogs.forEach(dog => {
      const li = document.createElement('li');
      li.textContent = `${dog.name} - ${dog.age} - ${dog.weight}`;
      dogsList.appendChild(li);
    });
    console.log(dogs);
  });

root.appendChild(dogsList);
