function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function serial_update(serial)
{
    var qserial = $('.scount').val();
    //alert(serial + qserial);

    var quanitity =  serial - qserial;

    var f=true;
    if(quanitity < 0)
    {
        $('#edit_quantity').html('Quantity is Not less than of '+ qserial);
        f=false;
        $('.total_serial_show').html('');
    }
    if(f==false)
    {
        return false;
    }
    else {

        $('#edit_quantity').html('');
        $('.total_serial_show').html('');

        for (var i = 1; i <= quanitity; i++) {

            $('.total_serial_show').append('<div class="form-group col-lg-4 col-md-4 col-xs-12 ">' +
                '<label for="inputTwitter" class="control-label mb-10">Serial Number ' + (i + parseInt(qserial)) + ' </label>' +
                '<input type="text" class="form-control edit_serial' + (i + parseInt(qserial)) + '" name="edt_serial[]" id="" placeholder="Enter Serial Number ' + (i + parseInt(qserial)) + '" required maxlength="12">' +
                '<span class="edit_sserial' + (i + parseInt(qserial)) + ' label label-danger"></span>' +
                '</div>');

        }
    }
}
function update_inventory_item()
{
    $('#edit_item_name').html('');
    $('#edit_hsn_code').html('');
    $('#edit_quantity').html('');
    $('#edit_without_gst_amt').html('');
    $('#edit_basic_amt').html('');
    $('#edit_gst_percent').html('');
    $('#edit_gst_amount').html('');
    $('#edit_gst_total_amount').html('');

    var edit_item_name = $('.edit_item_name').val();
    var edit_hsn_code = $('.edit_hsn_code').val();
    var edit_quantity = $('.edit_quantity').val();

    var edit_basic_amt = '0';
    var edit_gst_percent = '0';
    var edit_gst_amount = '0';
    var edit_gst_total_amount = '0';
    var edit_without_gst_amt = '0';


    if($('.edit_basic_amt').is(":visible")) {
        edit_basic_amt = $('.edit_basic_amt').val();
        edit_gst_percent = $('.edit_gst_percent').val();
        edit_gst_amount = $('.edit_gst_amount').val();
        edit_gst_total_amount = $('.edit_gst_total_amount').val();
    }
    else{
        edit_without_gst_amt  = $('.edit_without_gst_amt').val();
    }


    var k1=document.getElementsByName("serial[]");
    var seriall = [];
    var f=true;

    $('.update_button').removeAttr('disabled');
    /*
    for (var i = 1; i <= edit_quantity; i++) {

        if (k1[i].value.length > 0) {
            if(k1[i].value.length < 12)
            {
                $('.edit_sserial'+i).html('This field must be 12 characters.');
                f =false;
            }
            else{
                seriall.push(k1[i].value);
                $('.edit_sserial'+i).html('');

            }
        }
        else {

            if(k1[i].value== "")
            {
                $('.edit_sserial'+i).html('This field is required.');
                f =false;
            }
        }
    }

*/


    if(edit_item_name =='')
    {
        $('#edit_item_name').html('Item is required');
        f =false;
    }
    if(edit_quantity =='')
    {
        $('#edit_quantity').html('Quantity is required');
        f =false;
    }
    if(edit_hsn_code =='')
    {
        $('#edit_hsn_code').html('HSN Code is required');
        f =false;
    }
    if($('.edit_basic_amt').is(":visible")) {
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
    else{
        if (edit_without_gst_amt == '') {
            $('#edit_without_gst_amt').html('Purchase Amount is required');
            f = false;
        }
    }
    if(f==false)
    {
        // $('.add_in').attr('disabled','disabled');
        f =false;
    }
    else
    {
        //alert(serial+' '+edit_gst_total_amount+' '+edit_gst_amount+' '+edit_gst_percent+' '+edit_basic_amt+' '+edit_without_gst_amt+' '+edit_quantity+' '+edit_hsn_code+' '+edit_item_name);
        $('.edit_loading_img').show();
        $.ajax({
            type: "POST",
            url: "../admin/update_in_item",
            data: {
                edit_item_name:edit_item_name,
                edit_hsn_code:edit_hsn_code,
                edit_quantity:edit_quantity,
                edit_without_gst_amt:edit_without_gst_amt,
                edit_basic_amt:edit_basic_amt,
                edit_gst_percent:edit_gst_percent,
                edit_gst_amount:edit_gst_amount,
                edit_gst_total_amount:edit_gst_total_amount,
                edit_serial:seriall,
                iditem:$('.iditem').val()
            },
            success: function (data) {

                //var iditem = $('.iditem').val()
                var final = data.split(',');
               // alert(final[0]);
                if(data.trim() =='0')
                {
                        $('.edit_something').html('Something Error');
                }
                else if(final[0] ==1){
                    //$('.okgst').show();
                    //$('.nogst').hide();

                    $('#'+final[1]).html('<td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td>'+final[8]+'</td><td><a class="btn btn-info edit_item" alt="'+final[1]+'" onclick="edit_in_item('+final[1]+')"> Edit </a></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }
                else if(final[0] =='2'){
                    //$('.okgst').hide();
                    //$('.nogst').show();
                    $('#'+final[1]).html('<td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td>'+final[8]+'</td><td><a class="btn btn-info edit_item" alt="'+final[1]+'" onclick="edit_in_item('+final[1]+')"> Edit </a></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }

            }
        });
    }
}










function update_inventory_item2()
{
    $('#edit_item_name').html('');
    $('#edit_hsn_code').html('');
    $('#edit_quantity').html('');
    $('#edit_without_gst_amt').html('');
    $('#edit_basic_amt').html('');
    $('#edit_gst_percent').html('');
    $('#edit_gst_amount').html('');
    $('#edit_gst_total_amount').html('');

    var edit_item_name = $('.edit_item_name').val();
    var edit_hsn_code = $('.edit_hsn_code').val();
    var edit_quantity = $('.edit_quantity').val();

    var edit_basic_amt = '0';
    var edit_gst_percent = '0';
    var edit_gst_amount = '0';
    var edit_gst_total_amount = '0';
    var edit_without_gst_amt = '0';


    if($('.edit_basic_amt').is(":visible")) {
        edit_basic_amt = $('.edit_basic_amt').val();
        edit_gst_percent = $('.edit_gst_percent').val();
        edit_gst_amount = $('.edit_gst_amount').val();
        edit_gst_total_amount = $('.edit_gst_total_amount').val();
    }
    else{
        edit_without_gst_amt  = $('.edit_without_gst_amt').val();
    }


    var k1=document.getElementsByName("serial[]");
    var seriall = [];
    var f=true;
    console.log(k1);
    alert(k1);
    $('.update_button').removeAttr('disabled');
    /*
    for (var i = 1; i <= edit_quantity; i++) {

        if (k1[i-1].value.length > 0) {
            console.log(k1[i-1].value.length);
            if(k1[i-1].value.length < 12)
            {
                $('.edit_sserial'+i).html('This field must be 12 characters.');
                f =false;
            }
            else{
                seriall.push(k1[i-1].value);
                $('.edit_sserial'+i).html('');

            }
        }
        else {

            if(k1[i-1].value== "")
            {
                $('.edit_sserial'+i).html('This field is required.');
                f =false;
            }
        }
    }
*/



    if(edit_item_name =='')
    {
        $('#edit_item_name').html('Item is required');
        f =false;
    }
    if(edit_quantity =='')
    {
        $('#edit_quantity').html('Quantity is required');
        f =false;
    }
    if(edit_hsn_code =='')
    {
        $('#edit_hsn_code').html('HSN Code is required');
        f =false;
    }
    if($('.edit_basic_amt').is(":visible")) {
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
    else{
        if (edit_without_gst_amt == '') {
            $('#edit_without_gst_amt').html('Purchase Amount is required');
            f = false;
        }
    }
    if(f==false)
    {
        // $('.add_in').attr('disabled','disabled');
        f =false;
    }
    else
    {
        alert('fhsjhjjfgbjedbjehbj');
        //alert(serial+' '+edit_gst_total_amount+' '+edit_gst_amount+' '+edit_gst_percent+' '+edit_basic_amt+' '+edit_without_gst_amt+' '+edit_quantity+' '+edit_hsn_code+' '+edit_item_name);
        $('.edit_loading_img').show();
        $.ajax({
            type: "get",
            url: "../../api/update_in_item",
            data: {
                edit_item_name:edit_item_name,
                edit_hsn_code:edit_hsn_code,
                edit_quantity:edit_quantity,
                edit_without_gst_amt:edit_without_gst_amt,
                edit_basic_amt:edit_basic_amt,
                edit_gst_percent:edit_gst_percent,
                edit_gst_amount:edit_gst_amount,
                edit_gst_total_amount:edit_gst_total_amount,
                edit_serial:seriall,
                iditem:$('.iditem').val()
            },
            success: function (data) {

                //var iditem = $('.iditem').val()
                var final = data.split(',');
                 alert(final[0] );
                 alert(final[1] );
                if(data.trim() =='0')
                {
                    $('.edit_something').html('Something Error');
                }
                else if(final[0] ==1){
                    //$('.okgst').show();
                    //$('.nogst').hide();

                    $('#'+final[1]).html('<td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td>'+final[8]+'</td><td><a class="btn btn-info edit_item" alt="'+final[1]+'" onclick="edit_in_item2('+final[1]+')"> Edit </a></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }
                else if(final[0] =='2'){
                    //$('.okgst').hide();
                    //$('.nogst').show();
                    $('#'+final[1]).html('<td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td>'+final[8]+'</td><td><a class="btn btn-info edit_item" alt="'+final[1]+'" onclick="edit_in_item2('+final[1]+')"> Edit </a></td>');
                    $('.edit_loading_img').hide();
                    $('#edit_in_item').modal('toggle');
                    $('.update_in_item').html('');
                    //$('.in_item_id').val(final[1]);
                }

            }
        });
    }
}