const storeButton = document.getElementById('storeButton');
const dataDiv = document.getElementById('data');

// Store data function
storeButton.addEventListener('click', async () => {
  const value = Math.floor(Math.random() * 100);  // Generate a random value
  try {
    const response = await fetch('http://192.168.86.195:3000/store', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
    });
    const result = await response.json();
    console.log('Data Stored:', result);

    // After storing, retrieve data
    getData();
  } catch (error) {
    console.error('Error storing data:', error);
  }
});

// Fetch and display data from SQLite database
async function getData() {
  try {
    const response = await fetch('http://192.168.86.195:3000/retrieve');
    const data = await response.json();
    dataDiv.innerHTML = data.map(item => `<p>Stored Value: ${item.value}</p>`).join('');
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}

// Get initial data when the page loads
getData();
