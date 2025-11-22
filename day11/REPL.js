// myDate.js

function showCurrentDate() {
  for (let i = 0; i < 1; i++) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const formattedDate = `${dd}-${mm}-${yyyy}`;
    console.log("Current Date:", formattedDate);
  }
}

showCurrentDate();
