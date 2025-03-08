function searchCustomRange() {
    let startYear = document.getElementById('start-year').value;
    let endYear = document.getElementById('end-year').value;
    if (startYear && endYear) {
        alert(`Searching articles from ${startYear} to ${endYear}`);
    } else {
        alert('Please enter valid years');
    }
}