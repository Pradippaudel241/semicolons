// document.getElementById('searchButton').addEventListener('click', function() {
//     // Gather the form data
//     const origin = document.getElementById('origin').value;
//     const destination = document.getElementById('destination').value;
//     const departure = document.getElementById('departure').value;
//     const returnDate = document.getElementById('return').value;
//     const nationality = document.getElementById('nationality').value;
//     const adults = document.getElementById('adults').value;
//     const children = document.getElementById('children').value;

//     // Clear any existing results
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = '';

//     // Logic for displaying results
//     if (origin === 'Kathmandu' && destination === 'Pokhara' && nationality === 'Nepali' && adults === '2' && children === '2') {
//         resultsContainer.innerHTML = `
//             <div class="card">
//                 <h3>SHREE AIRLINES</h3>
//                 <p>Departure: ${origin} | Arrival: ${destination}</p>
//                 <p>12:30 - 12:55 | NPR 5200 | Non-Refundable</p>
//                 <p>Nationality: ${nationality} | Adults: ${adults} | Children: ${children}</p>
//                 <button>Book</button>
//             </div>
//             <div class="card">
//                 <h3>YETI AIRLINES</h3>
//                 <p>Departure: ${origin} | Arrival: ${destination}</p>
//                 <p>14:10 - 14:40 | NPR 5200 | Non-Refundable</p>
//                 <p>Nationality: ${nationality} | Adults: ${adults} | Children: ${children}</p>
//                 <button>Book</button>
//             </div>
//         `;
//     } else {
//         alert('No matching flights found!');
//     }
// });
