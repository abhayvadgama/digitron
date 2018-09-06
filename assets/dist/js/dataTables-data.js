/*DataTable Init*/

"use strict"; 

$(document).ready(function() {
	"use strict";
	
	$('#datable_1').DataTable({
        "lengthMenu": [[100, 200, 300, -1], [100, 200, 300, "All"]]
	});
    $('#datable_2').DataTable({ "lengthChange": false});
} );