
    // Get references to elements
    const twoWayBtn = document.getElementById('twoWay');
    const oneWayBtn = document.getElementById('oneWay');
    const returnDateGroup = document.getElementById('returnDateGroup');
    const departureDate = document.getElementById('departure');
    const returnDate = document.getElementById('returnDate');


    // Initialize today's date for date input restrictions
    const today = new Date().toISOString().split('T')[0];
    departureDate.setAttribute('min', today);
    returnDate.setAttribute('min', today);

    // Event listener for One Way button
    oneWayBtn.addEventListener('click', () => {
        oneWayBtn.classList.add('active');
        twoWayBtn.classList.remove('active');
        returnDate.style.display='none';
        returnDateGroup.style.display = 'none';
        returnDate.value = ''; // Clear the return date if switching to one way
    });

    // Event listener for Two Way button
    twoWayBtn.addEventListener('click', () => {
        console.log("hello");
        twoWayBtn.classList.add('active');
        oneWayBtn.classList.remove('active');
        returnDateGroup.style.display = 'block';
        returnDate.style.display='block';

    });

    // Event listener to ensure return date is not earlier than departure date
    departureDate.addEventListener('change', () => {
        returnDate.setAttribute('min', departureDate.value);
    });
