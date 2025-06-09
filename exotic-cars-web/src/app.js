const cars = require('./cars');

const carListContainer = document.createElement('div');
carListContainer.className = 'car-list';

cars.forEach(car => {
    const carItem = document.createElement('div');
    carItem.className = 'car-item';

    const carImage = document.createElement('img');
    carImage.src = car.imageUrl;
    carImage.alt = `${car.name} ${car.model}`;
    carImage.className = 'car-image';

    const carDetails = document.createElement('div');
    carDetails.className = 'car-details';

    const carName = document.createElement('h2');
    carName.textContent = car.name;

    const carModel = document.createElement('p');
    carModel.textContent = `Model: ${car.model}`;

    const carDescription = document.createElement('p');
    carDescription.textContent = car.description;

    carDetails.appendChild(carName);
    carDetails.appendChild(carModel);
    carDetails.appendChild(carDescription);
    carItem.appendChild(carImage);
    carItem.appendChild(carDetails);
    carListContainer.appendChild(carItem);
});

document.body.appendChild(carListContainer);