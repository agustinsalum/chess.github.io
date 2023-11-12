function show_hide_rows() {
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");

    // Assuming the first 5 rows are already visible
    for (var i = 6; i < rows.length; i++) {
        // Toggle row visibility
        rows[i].style.display = (rows[i].style.display === 'none' || rows[i].style.display === '') ? 'table-row' : 'none';
    }
}