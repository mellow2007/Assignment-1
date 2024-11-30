function toggleComboDetails(comboId) {
    const combo = document.getElementById(comboId);
    if (combo.style.display === 'block') {
        combo.style.display = 'none';
    } else {
        combo.style.display = 'block';
    }
}
