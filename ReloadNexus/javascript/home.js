// document.addEventListener('DOMContentLoaded', function () {
//     var dropdowns = document.querySelectorAll('.dropdown');
//     dropdowns.forEach(function (dropdown) {
//         dropdown.addEventListener('click', function (e) {
//             e.stopPropagation();
//             dropdown.classList.toggle('open');
//         });
//     });

//     var submenus = document.querySelectorAll('.dropdown-submenu');
//     submenus.forEach(function (submenu) {
//         submenu.addEventListener('click', function (e) {
//             e.stopPropagation();
//             submenu.classList.toggle('open');
//         });
//     });

//     document.addEventListener('click', function () {
//         dropdowns.forEach(function (dropdown) {
//             dropdown.classList.remove('open');
//         });
//         submenus.forEach(function (submenu) {
//             submenu.classList.remove('open');
//         });
//     });
// });

// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }
