function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function serial_update(serial) {
    var qserial = $('.scount').val();
    //alert(serial + qserial);

    var quanitity = serial - qserial;

    var f = true;
    if (quanitity < 0) {
        $('#edit_quantity').html('Quantity is Not less than of ' + qserial);
        f = false;
        $('.total_serial_show').html('');
    }
    if (f == false) {
        return false;
    }
    else {

        $('#edit_quantity').html('');
        $('.total_serial_show').html('');
        $('.serial_count').val(quanitity);
        for (var i = 1; i <= quanitity; i++) {

            $('.total_serial_show').append('<div class="form-group col-lg-4 col-md-4 col-xs-12 ">' +
                '<label for="inputTwitter" class="control-label mb-10">Serial Number ' + (i + parseInt(qserial)) + ' </label>' +
                '<input type="text" class="form-control eds edit_new_serial' + (i) + '" name="edit_new_serial[]" id="eds' + i + '" placeholder="Enter Serial Number ' + (i + parseInt(qserial)) + '" required maxlength="12" value="" onkeyup="$(this).val(this.value);">' +
                '<span class="editt_sserial' + (i) + ' label label-danger"></span>' +
                '</div>');

        }
    }
    edit_calculate_basic_amt();
}

function update_inventory_item() {
    var k1 = $('.scount').val();
    var k2 = $('.serial_count').val();
    $('#edit_item_name').html('');
    $('#edit_hsn_code').html('');
    $('#edit_quantity').html('');
    $('#edit_without_gst_amt').html('');
    $('#edit_basic_amt').html('');
    $('#edit_gst_percent').html('');
    $('#edit_gst_amount').html('');
    $('#edit_gst_total_amount').html('');
    $('#rate').html('');
    $('#uom').html('');

    var edit_item_name = $('.edit_item_name').val();
    var edit_hsn_code = $('.edit_hsn_code').val();
  //  var edit_quantity = $('.edit_quantity').val();

    var edit_basic_amt = '0';
    var edit_gst_percent = '0';
    var edit_gst_amount = '0';
    var edit_gst_total_amount = '0';
    var edit_without_gst_amt = '0';
    var rate = '';
    var uom = '';
    rate = $('.edit_rate').val();
    uom = $('.edit_uom').val();
    if ($('.edit_basic_amt').is(":visible")) {
        edit_basic_amt = $('.edit_basic_amt').val();
        edit_gst_percent = $('.edit_gst_percent').val();
        edit_gst_amount = $('.edit_gst_amount').val();
        edit_gst_total_amount = $('.edit_gst_total_amount').val();
    }
    else {
        edit_without_gst_amt = $('.edit_without_gst_amt').val();
    }


    //var k1 = document.getElementsByName("serial[]");
    var seriall = [];
    var f = true;



    $('.update_button').removeAttr('disabled');
    var edit_quantity=0,edit_serial_allow=0;
    if($('#edit_serial_allow').prop('checked')) {
        edit_serial_allow = $('#edit_serial_allow').val();
        edit_quantity = $('.edit_quantity').val();
        for (var i = 1; i <= k1; i++) {
            var valu = $('.edit_serial' + i).val();
            if (valu.length < 12) {
                $('.edit_sserial' + i).html('This field must be 12 characters.');
                f = false;
            }
            else if (valu == "") {
                $('.edit_sserial' + i).html('This field is required.');
                f = false;
            }
            else {
                $('.edit_sserial' + i).html('');
                seriall.push(valu);
            }
        }
    }
    else {
        edit_quantity = $('.edit_quantity').val();
    }
    var valud = document.getElementsByName('edit_new_serial[]');
//valud = $.unique(valud);
//     $(valud).each(function(i, item) {
//         var grade =  $(item).val();
//         //seriall.push(grade);
//         console.log(i);
//         console.log(grade);
//     });
    var incre = 1;
    for (var j = k2; j < (k2 * 2); j++) {
      //  console.log(valud[j].value);
        var newval = valud[j].value;
        if (newval.length > 0) {
            if (newval.length < 12) {
                //      console.log(k1[i-1].value);
                $('.editt_sserial' + incre).html('This field must be 12 characters.');
                f = false;
            }
            else {
                seriall.push(newval);
                $('.editt_sserial' + incre).html('');

            }
        }
        else {
            if (newval == "") {
                $('.editt_sserial' + incre).html('This field is required.');
                f = false;
            }
        }
        incre++;
        // $(valud[j]).each(function() {
        //     $.each(this.attributes, function() {
        //         if(this.specified) {
        //
        //         }
        //     });
        // });
        // console.log(seriall);
        // return 0;
        // if (valud.length < 12) {
        //     $('.editt_sserial' + j).html('This field must be 12 characters.');
        //     f = false;
        // }
        //
        // else if (valud == "") {
        //     $('.editt_sserial' + j).html('This field is required.');
        //     f = false;
        // }
        //
        // else {
        //     $('.editt_sserial' + j).html('');
        //
        // }
    }

    // console.log(seriall);
    // alert(k1+' '+k2+' dlkfsdkl');
    //  return 0;


    if (edit_item_name == '') {
        $('#edit_item_name').html('Item is required');
        f = false;
    }
    if (edit_quantity == '') {
        $('#edit_quantity').html('Quantity is required');
        f = false;
    }
    if (edit_hsn_code == '') {
        $('#edit_hsn_code').html('HSN Code is required');
        f = false;
    }
    if(rate =='')
    {
        $('#edit_rate').html('Rate is required');
        f =false;
    }
    if(uom =='')
    {
        $('#edit_uom').html('Unit is required');
        f =false;
    }
    if ($('.edit_basic_amt').is(":visible")) {
        if (edit_basic_amt == '') {
            $('#edit_basic_amt').html('Basic Amount is required');
            f = false;
        }
        if (edit_gst_percent == '') {
            $('#edit_gst_percent').html('GST Percent is required');
            f = false;
        }
        if (edit_gst_amount == '') {
            $('#edit_gst_amount').html('GST Amount is required');
            f = false;
        }
        if (edit_gst_total_amount == '') {
            $('#edit_gst_total_amount').html('Purchase Amount is required');
            f = false;
        }
    }
    else {
        if (edit_without_gst_amt == '') {
            $('#edit_without_gst_amt').html('Purchase Amount is required');
            f = false;
        }
    }
    if (f == false) {
        // $('.add_in').attr('disabled','disabled');
        f = false;
    }
    else {
        //alert(edit_serial_allow);
        //alert(edit_gst_total_amount+' '+edit_gst_amount+' '+edit_gst_percent+' '+edit_basic_amt+' '+edit_without_gst_amt+' '+edit_quantity+' '+edit_hsn_code+' '+edit_item_name+' '+uom+' '+rate);
        $('.edit_loading_img').show();
        $.ajax({
            type: "POST",
            url: "../admin/update_in_item",
            data: {
                edit_serial_allow:edit_serial_allow,
                edit_item_name: edit_item_name,
                edit_hsn_code: edit_hsn_code,
                edit_quantity: edit_quantity,
                exist_quantity: k1,
                new_quantity: k2,
                edit_without_gst_amt: edit_without_gst_amt,
                edit_basic_amt: edit_basic_amt,
                edit_gst_percent: edit_gst_percent,
                edit_gst_amount: edit_gst_amount,
                edit_gst_total_amount: edit_gst_total_amount,
                edit_serial: seriall,
                rate:rate,
                uom:uom,
                iditem: $('.iditem').val()
            },
            success: function (data) {
//console.log(data);
                //var iditem = $('.iditem').val()
                var final = data.split(',');
                // alert(final[0]);
                if (data.trim() == '0') {
                    $('.edit_something').html('Something Error');
                }
                else if (final[0] == 1) {
                    //$('.okgst').show();
                    //$('.nogst').hide();

                    $('#' + final[1]).html('<td>' + final[2] + '</td><td>' + final[3] + '</td><td>' + final[4] + '</td><td>' + final[5] + '</td><td>' + final[6] + '</td><td>' + final[7] + '</td><td>' + final[8] + '</td><td><a class="btn btn-info edit_item" alt="' + final[1] + '" onclick="edit_in_item(' + final[1] + ')"> Edit </a></td>');
                    $('#final_total').html('<td>Total</td><td>'+final[9]+'</td><td></td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td>'+final[12]+'</td><td></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }
                else if (final[0] == '2') {
                    //$('.okgst').hide();
                    //$('.nogst').show();
                    $('#' + final[1]).html('<td>' + final[2] + '</td><td>' + final[3] + '</td><td>' + final[4] + '</td><td>' + final[5] + '</td><td>' + final[6] + '</td><td>' + final[7] + '</td><td>' + final[8] + '</td><td><a class="btn btn-info edit_item" alt="' + final[1] + '" onclick="edit_in_item(' + final[1] + ')"> Edit </a></td>');
                    $('#final_total').html('<td>Total</td><td>'+final[9]+'</td><td></td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td>'+final[12]+'</td><td></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }

            }
        });
    }
}


function update_inventory_item2() {
    var seriall = [];
    var k1 = $('.scount').val();
    var k2 = $('.serial_count').val();
    var f = true;
    $('#edit_item_name').html('');
    $('#edit_hsn_code').html('');
    $('#edit_quantity').html('');
    $('#edit_without_gst_amt').html('');
    $('#edit_basic_amt').html('');
    $('#edit_gst_percent').html('');
    $('#edit_gst_amount').html('');
    $('#edit_gst_total_amount').html('');
    $('#edit_rate').html('');
    $('#edit_uom').html('');
    var edit_item_name = $('.edit_item_name').val();
    var edit_hsn_code = $('.edit_hsn_code').val();

    var edit_basic_amt = '0';
    var edit_gst_percent = '0';
    var edit_gst_amount = '0';
    var edit_gst_total_amount = '0';
    var edit_without_gst_amt = '0';
    var rate = '';
    var uom = '';
    rate = $('.edit_rate').val();
    uom = $('.edit_uom').val();

    if ($('.edit_basic_amt').is(":visible")) {
        edit_basic_amt = $('.edit_basic_amt').val();
        edit_gst_percent = $('.edit_gst_percent').val();
        edit_gst_amount = $('.edit_gst_amount').val();
        edit_gst_total_amount = $('.edit_gst_total_amount').val();
    }
    else {
        edit_without_gst_amt = $('.edit_without_gst_amt').val();
    }

    var edit_quantity,edit_serial_allow=0;;
    if($('#edit_serial_allow').prop('checked')) {
        edit_serial_allow = $('#edit_serial_allow').val();
        edit_quantity = $('.edit_quantity').val();
        $('.update_button').removeAttr('disabled');

        for (var i = 1; i <= k1; i++) {
            var valu = $('.edit_add_serial' + i).val();
            if (valu.length < 12) {
                $('.edit_sserial' + i).html('This field must be 12 characters.');
                f = false;
            }

            else if (valu == "") {
                $('.edit_sserial' + i).html('This field is required.');
                f = false;
            }

            else {
                $('.edit_sserial' + i).html('');
                seriall.push(valu);
            }
        }
    }
    var valud = document.getElementsByName('edit_new_serial[]');
//valud = $.unique(valud);
//     $(valud).each(function(i, item) {
//         var grade =  $(item).val();
//         //seriall.push(grade);
//         console.log(i);
//         console.log(grade);
//     });
var incre = 1;
    if($('#edit_serial_allow').prop('checked')) {
        edit_quantity = $('.edit_quantity').val();
        for (var j = k2; j < (k2 * 2); j++) {
           // console.log(valud[j].value);
            var newval = valud[j].value;
            if (newval.length > 0) {
                if (newval.length < 12) {
                    //      console.log(k1[i-1].value);
                    $('.editt_sserial' + incre).html('This field must be 12 characters.');
                    f = false;
                }
                else {
                    seriall.push(newval);
                    $('.editt_sserial' + incre).html('');

                }
            }
            else {
                if (newval == "") {
                    $('.editt_sserial' + incre).html('This field is required.');
                    f = false;
                }
            }
            incre++;
        }
    }

   // console.log(seriall);
//alert(k1+' '+k2);
   // return 0;
    if(rate =='')
    {
        $('#edit_rate').html('Rate is required');
        f =false;
    }
    if(uom =='')
    {
        $('#edit_uom').html('Unit is required');
        f =false;
    }
    if (edit_item_name == '') {
        $('#edit_item_name').html('Item is required');
        f = false;
    }
    if (edit_quantity == '') {
        $('#edit_quantity').html('Quantity is required');
        f = false;
    }
    if (edit_hsn_code == '') {
        $('#edit_hsn_code').html('HSN Code is required');
        f = false;
    }
    if ($('.edit_basic_amt').is(":visible")) {
        if (edit_basic_amt == '') {
            $('#edit_basic_amt').html('Basic Amount is required');
            f = false;
        }
        if (edit_gst_percent == '') {
            $('#edit_gst_percent').html('GST Percent is required');
            f = false;
        }
        if (edit_gst_amount == '') {
            $('#edit_gst_amount').html('GST Amount is required');
            f = false;
        }
        if (edit_gst_total_amount == '') {
            $('#edit_gst_total_amount').html('Purchase Amount is required');
            f = false;
        }
    }
    else {
        if (edit_without_gst_amt == '') {
            $('#edit_without_gst_amt').html('Purchase Amount is required');
            f = false;
        }
    }
    if (f == false) {
        // $('.add_in').attr('disabled','disabled');
        f = false;
     //   return 0;
    }
    else {
        // alert('fhsjhjjfgbjedbjehbj');
        //alert(serial+' '+edit_gst_total_amount+' '+edit_gst_amount+' '+edit_gst_percent+' '+edit_basic_amt+' '+edit_without_gst_amt+' '+edit_quantity+' '+edit_hsn_code+' '+edit_item_name);
        $('.edit_loading_img').show();
        $.ajax({
            type: "get",
            url: "../../api/update_in_item",
            data: {
                edit_serial_allow:edit_serial_allow,
                edit_item_name: edit_item_name,
                edit_hsn_code: edit_hsn_code,
                edit_quantity: edit_quantity,
                exist_quantity: k1,
                new_quantity: k2,
                edit_without_gst_amt: edit_without_gst_amt,
                edit_basic_amt: edit_basic_amt,
                edit_gst_percent: edit_gst_percent,
                edit_gst_amount: edit_gst_amount,
                edit_gst_total_amount: edit_gst_total_amount,
                edit_serial: seriall,
                rate:rate,
                uom:uom,
                iditem: $('.iditem').val()
            },
            success: function (data) {
                var final = data.split(',');
                if (data.trim() == '0') {
                    $('.edit_something').html('Something Error');
                }
                else if (final[0] == 1) {
                    //$('.okgst').show();
                    //$('.nogst').hide();

                    $('#' + final[1]).html('<td>' + final[2] + '</td><td>' + final[3] + '</td><td>' + final[4] + '</td><td>' + final[5] + '</td><td>' + final[6] + '</td><td>' + final[7] + '</td><td>' + final[8] + '</td><td><a class="btn btn-info edit_item" alt="' + final[1] + '" onclick="edit_in_item2(' + final[1] + ')"> Edit </a></td>');
                    $('#final_total').html('<td>Total</td><td>'+final[9]+'</td><td></td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td>'+final[12]+'</td><td></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }
                else if (final[0] == '2') {
                    //$('.okgst').hide();
                    //$('.nogst').show();
                    $('#' + final[1]).html('<td>' + final[2] + '</td><td>' + final[3] + '</td><td>' + final[4] + '</td><td>' + final[5] + '</td><td>' + final[6] + '</td><td>' + final[7] + '</td><td>' + final[8] + '</td><td><a class="btn btn-info edit_item" alt="' + final[1] + '" onclick="edit_in_item2(' + final[1] + ')"> Edit </a></td>');
                    $('#final_total').html('<td>Total</td><td>'+final[9]+'</td><td></td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td>'+final[12]+'</td><td></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }

            }
        });
    }
}

function edit_calculate_basic_amt()
{
    var qty = parseInt($('.edit_quantity').val());
    var rate = parseInt($('.edit_rate').val());
    var basic_amount = qty * rate;
    $('.edit_without_gst_amt').val(basic_amount);
    $('.edit_basic_amt').val(basic_amount);
}
