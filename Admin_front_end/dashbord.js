const add_bus = document.getElementById('add_bus');
const add_user = document.getElementById('add_user');
const stop_fleet = document.getElementById('stop_fleet');

const plateNumber = document.getElementById('bus-plate-number').value;
const fleetKey = document.getElementById('fleet-key').value;
const phoneNumber = document.getElementById('user-phone-number').value
const assignedTo = document.getElementById('user-bus-plate-number').value
const stop_fleet_num = document.getElementById('stop-bus-plate-number').value


add_bus.addEventListener('click', () => {
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ plateNumber:plateNumber,
    fleetKey:fleetKey}),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

add_user.addEventListener('click', () => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber:phoneNumber,
      assignedTo:assignedTo}),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });

  stop_fleet.addEventListener('click', () => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({plateNumber:stop_fleet_num}),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });