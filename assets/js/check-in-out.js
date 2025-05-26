
 // Initialize date range
  flatpickr("#check-in", {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
      checkOutCalendar.set("minDate", dateStr); // block past dates
    }
  });

  const checkOutCalendar = flatpickr("#check-out", {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
      checkInCalendar.set("maxDate", dateStr); // optional
    }
  });

const checkInCalendar = flatpickr("#check-in");




// Get today's date in YYYY-MM-DD
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];

  // Check-In Picker
  const checkInPicker = flatpickr("#check-in", {
    dateFormat: "Y-m-d",
    minDate: formattedToday, // Allow from today
    onChange: function(selectedDates, dateStr, instance) {
      // Set selected check-in as minDate for check-out
      const selectedDate = new Date(dateStr);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      // Format nextDay to YYYY-MM-DD
      const nextDayFormatted = nextDay.toISOString().split("T")[0];

      checkOutPicker.set("minDate", nextDayFormatted); // Enforce 1 night stay minimum
    }
  });

  // Check-Out Picker
  const checkOutPicker = flatpickr("#check-out", {
    dateFormat: "Y-m-d",
    minDate: formattedToday // fallback min
  });



//  
  document.addEventListener('DOMContentLoaded', () => {
  const guestToggle = document.querySelector('.guest-selector');
  const guestDropdown = document.getElementById('guestDropdown');
  const guestInfo = document.getElementById('guestInfo');

  const roomCountEl = document.getElementById('roomCount');
  const adultCountEl = document.getElementById('adultCount');
  const childCountEl = document.getElementById('childCount');

  let room = 1;
  let adult = 1;
  let child = 0;

  // Update summary text
  function updateGuestInfo() {
    guestInfo.textContent = `${room} Room${room > 1 ? 's' : ''}, ${adult} Adult${adult > 1 ? 's' : ''}, ${child} Child${child !== 1 ? 'ren' : ''}`;
  }

  // Handle clicks
  guestToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    guestDropdown.style.display = guestDropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Increase/decrease buttons
  guestDropdown.addEventListener('click', (e) => {
    const type = e.target.getAttribute('data-type');
    if (!type) return;

    if (e.target.classList.contains('plus')) {
      if (type === 'room') room++;
      if (type === 'adult') adult++;
      if (type === 'child') child++;
    } else if (e.target.classList.contains('minus')) {
      if (type === 'room' && room > 1) room--;
      if (type === 'adult' && adult > 1) adult--;
      if (type === 'child' && child > 0) child--;
    }

    // Update UI
    roomCountEl.textContent = room;
    adultCountEl.textContent = adult;
    childCountEl.textContent = child;
    updateGuestInfo();
  });

  // Hide on outside click
  document.addEventListener('click', (e) => {
    if (!guestToggle.contains(e.target)) {
      guestDropdown.style.display = 'none';
    }
  });

  // Initialize
  updateGuestInfo();
});