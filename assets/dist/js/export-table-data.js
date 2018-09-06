/*Export Table Init*/

"use strict"; 

$(document).ready(function() {
	$('#example').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			 'csv', 'excel', 'pdf', 'print'
		]
	} );
} );