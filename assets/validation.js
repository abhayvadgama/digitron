//var urls = $(location).attr('hostname');
$(function () {
    $('.add_item_btn').click(function () {
        $('.total_serial_show').html('');
    });
});
function blog_fn() {

    //$('#invoice_date').html('');
    //$('#billno').html('');
    $('.item_name_error').html('');
    $('.item_id_name').html('');
    $('#make').html('');
    $('#main_cat_name').html('');
    $('#qty').html('');
    $('#hsn_code').html('');
    $('#ggst_total_amount').html('');
    $('#basic_amount').html('');
    $('#gst_percent').html('');
    $('#gst_amount').html('');
    $('#gst_total_amount').html('');
    $('#purchase_from').html('');
    $('#item_gst_percent').html('');
    $('#rate').html('');
    $('#uom').html('');

    var item_name = '0';
    var item_id = '0';
    var basic_amount = '0';
    var gst_percent = '0';
    var item_gst_percent = '0';
    var gst_amount = '0';
    var gst_total_amount = '0';
    var make = '0';
    var main_cat_id = '0';
    var cat_id = '0';
    var sub_cat_id = '0';
    var rate = '';
    var uom = '';
    var serial = [];
    //var invoice_date=document.frm1.invoice_date.value;

    if ($('#item_name').is(":visible")) {
        item_name = $('#item_name').val();
        item_gst_percent = $('.item_gst_percent').val();
        make = $('.make').val();
        main_cat_id = $('.main_cat_name').val();
        cat_id = $('.cat_name').val();
        sub_cat_id = $('.sub_cat').val();
    }
    else {
        item_id = $('#item_id').val();

    }

    var purchase_from = $('.purchase_from').val();
    var qty = $('.quantity').val();
    var hsn_code = $('.hsn_code').val();
    var ggst_amt = $('.ggst_total_amount').val();

     rate = $('.rate').val();
     uom = $('.uom').val();


    if($('.with_gst').is(":visible"))
    {
        basic_amount = $('.basic_amt').val();
        gst_percent = $('.cal_gst_percent').val();
        gst_amount = $('.gst_amount').val();
        gst_total_amount = $('.gst_total_amount').val();
    }

    var names = [];
    var f=true;
    $('.add_in').removeAttr('disabled');
    var qty=0,serial_allow=0;
    if($('#serial_allow').prop('checked')) {
        serial_allow = $('#serial_allow').val();
        qty = $('.quantity').val();
        for (var i = 1; i <= qty; i++) {
            if ($('.serial' + i).val() !== "") {
                if ($('.serial' + i).val().length < 12) {
                    $('.serial' + i).html('This field must be 12 characters.');
                    f = false;
                }
                else {
                    names.push($('.serial' + i).val());
                    $('.serial' + i).html('');

                }
            }
            else {
                $('.serial' + i).html('This field is required.');
                f = false;
            }
        }
    }
    else{
        qty = $('.quantity').val();
    }

    if(purchase_from =='')
    {
        $('#purchase_from').html('Supplier is required');
        f =false;
    }
    if(rate =='')
    {
        $('#rate').html('Rate is required');
        f =false;
    }
    if(uom =='')
    {
        $('#uom').html('Unit is required');
        f =false;
    }
    if(make =='')
    {
        $('#make').html('Make is required');
        f =false;
    }
    if(item_gst_percent =='')
    {
        $('#item_gst_percent').html('GST Percentage is required');
        f =false;
    }
    if(main_cat_id =='')
    {
        $('#main_cat_name').html('Main Category is required');
        f =false;
    }
    if(item_name=='')
    {
        $('.item_name_error').html('Please Enter Item Name');
        f =false;
    }
    if(item_id=='')
    {
        $('.item_id_name').html('Please Select Item');
        f =false;
    }
    if(qty=='')
    {
        //alert('sdj');
        $('#qty').html('Quanity is required');
        f =false;
    }
    if(hsn_code=='')
    {
        $('#hsn_code').html('HSN Code is required');
        f =false;
    }
    if(ggst_amt=='')
    {
      //  alert('gga');
        $('#ggst_total_amount').html('Purchase Amount is required');
        f =false;
    }
    if(basic_amount=='')
    {
      //  alert('ba');
        $('#basic_amount').html('Basic Amount is required');
        f =false;
    }
    if(gst_percent=='')
    {
      //  alert('gp');
        $('#gst_percent').html('GST Percent is required');
        f =false;
    }
    if(gst_amount=='')
    {
      //  alert('ga');
        $('#gst_amount').html('GST Amount is required');
        f =false;
    }
    if(gst_total_amount=='')
    {
      //  alert('gta');
        $('#gst_total_amount').html('Purachase Amount is required');
        f =false;
    }
var inventory_id_set = $('.in_item_id').val();
    if(f==false)
    {
        f =false;
    }
    else
    {
        var invoice_date = $('.invoice_date').val();
        var billno = $('.billno').val();
        $('.loading_img').show();
           /*  alert(invoice_date+' '+billno+' '+item_id+hsn_code+' '+purchase_from+' '+qty+' '+ggst_amt+' '+basic_amount+' '+gst_percent+' '+gst_amount+' '+gst_total_amount+' '+names+' '+inventory_id_set); */
            $.ajax({
                type: "POST",
                url: "../admin/saveinventory",
                data:{serial_allow:serial_allow,invoice_date:invoice_date,billno:billno,item_enter:'1',item_id:item_id,hsn_code:hsn_code,purchase_from:purchase_from,qty:qty,ggst_amt:ggst_amt,basic_amount:basic_amount,gst_percent:gst_percent,gst_amount:gst_amount,gst_total_amount:gst_total_amount,serial:names,inventory_id_set:inventory_id_set,rate:rate,uom:uom},
                success: function(data){
                    /* alert(data); */
                    var final = data.split(',');
                   // alert(final[0]);
                    if(data.trim() =='0')
                    {
                        $('.something').html('Something Error');
                    }
                    else if(final[0] == 1){
                        //alert('dfkj');
                        $('.final_data1').append('<tr id="'+final[8]+'"><td>'+final[1]+'</td><td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td><a class="btn btn-info edit_item" alt="'+final[8]+'" onclick="edit_in_item('+final[8]+')"> Edit </a></td></tr>');
                        $('#final_total').html('<td>Total</td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td></td><td>'+final[12]+'</td><td>'+final[13]+'</td><td></td>');
                        $('.loading_img').hide();
                        $('#add_item').modal('toggle');
                        disable_purchase();
                        $('.form_sub')[0].reset();
                        $('.in_item_id').val(final[9]);
                    }
                    else if(final[0] =='2'){
                        //$('.okgst').hide();
                        //$('.nogst').show();
                        $('.final_data1').append('<tr id="'+final[8]+'"><td>'+final[1]+'</td><td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td><a class="btn btn-info edit_item" alt="'+final[8]+'" onclick="edit_in_item('+final[8]+')"> Edit </a></td></tr>');
                        $('#final_total').html('<td>Total</td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td></td><td>'+final[12]+'</td><td>'+final[13]+'</td><td></td>');
                        $('.loading_img').hide();
                        $('#add_item').modal('toggle');
                        disable_purchase();
                        $('.form_sub')[0].reset();
                        $('.in_item_id').val(final[9]);
                    }
                }
            });
        
        if($('.final_data1').is(':empty'))
        {
            $('.final_btn_set').html('');
        }
        else{
            $('.final_btn_set').html('<input type="submit" class="btn btn-success" value="Add Inventory" /> &nbsp; &nbsp; <a href="http://dig.projexis.co.in/admin/viewinventory" class="btn btn-warning">Cancel</a>');
            $('.form_sub').append('<input type="hidden" name="inventory_id" value="'+inventory_id_set+'" />');
        }
    }

        return true;

}

/* ADD inventory data  */

function blog_fn2() {

    //$('#invoice_date').html('');
    //$('#billno').html('');
    $('.item_name_error').html('');
    $('.item_id_name').html('');
    $('#make').html('');
    $('#main_cat_name').html('');
    $('#qty').html('');
    $('#hsn_code').html('');
    $('#ggst_total_amount').html('');
    $('#basic_amount').html('');
    $('#gst_percent').html('');
    $('#gst_amount').html('');
    $('#gst_total_amount').html('');
    $('#purchase_from').html('');
    $('#item_gst_percent').html('');
    $('#rate').html('');
    $('#uom').html('');

    var item_name = '0';
    var item_id = '0';
    var basic_amount = '0';
    var gst_percent = '0';
    var item_gst_percent = '0';
    var gst_amount = '0';
    var gst_total_amount = '0';
    var make = '0';
    var main_cat_id = '0';
    var cat_id = '0';
    var sub_cat_id = '0';
    var rate = '';
    var uom = '';
    var serial = [];
    //var invoice_date=document.frm1.invoice_date.value;

    if ($('#item_name').is(":visible")) {
        item_name = $('#item_name').val();
        item_gst_percent = $('.item_gst_percent').val();
        make = $('.make').val();
        main_cat_id = $('.main_cat_name').val();
        cat_id = $('.cat_name').val();
        sub_cat_id = $('.sub_cat').val();
    }
    else {
        item_id = $('#item_id').val();

    }

    var purchase_from = $('.purchase_from').val();

    var hsn_code = $('.hsn_code').val();
    var ggst_amt = $('.ggst_total_amount').val();
    rate = $('.rate').val();
    uom = $('.uom').val();


    if($('.with_gst').is(":visible"))
    {
        basic_amount = $('.basic_amt').val();
        gst_percent = $('.cal_gst_percent').val();
        gst_amount = $('.gst_amount').val();
        gst_total_amount = $('.gst_total_amount').val();
    }

    var names = [];
    var f=true;
    $('.add_in').removeAttr('disabled');

    var qty=0,serial_allow=0;
    if($('#serial_allow').prop('checked')) {
        serial_allow = $('#serial_allow').val();
        qty = $('.quantity').val();
        for (var i = 1; i <= qty; i++) {
            if ($('.serial' + i).val() !== "") {
                if ($('.serial' + i).val().length < 12) {
                    $('.serial' + i).html('This field must be 12 characters.');
                    f = false;
                }
                else {
                    names.push($('.serial' + i).val());
                    $('.serial' + i).html('');

                }
            }
            else {
                $('.serial' + i).html('This field is required.');
                f = false;
            }
        }
    }
    else{
        qty = $('.quantity').val();
    }

    if(purchase_from =='')
    {
        $('#purchase_from').html('Supplier is required');
        f =false;
    }
    if(make =='')
    {
        $('#make').html('Make is required');
        f =false;
    }
    if(item_gst_percent =='')
    {
        $('#item_gst_percent').html('GST Percentage is required');
        f =false;
    }
    if(main_cat_id =='')
    {
        $('#main_cat_name').html('Main Category is required');
        f =false;
    }
    // if (invoice_date == "")
    // {
    //     $('#invoice_date').html('Invoice date is required');
    //     f =false;
    // }
    if(item_name=='')
    {
        $('.item_name_error').html('Please Enter Item Name');
        f =false;
    }
    if(item_id=='')
    {
        $('.item_id_name').html('Please Select Item');
        f =false;
    }
    if(qty=='')
    {
        //alert('sdj');
        $('#qty').html('Quanity is required');
        f =false;
    }
    if(rate =='')
    {
        $('#rate').html('Rate is required');
        f =false;
    }
    if(uom =='')
    {
        $('#uom').html('Unit is required');
        f =false;
    }
    if(hsn_code=='')
    {
        $('#hsn_code').html('HSN Code is required');
        f =false;
    }
    if(ggst_amt=='')
    {
        //  alert('gga');
        $('#ggst_total_amount').html('Purchase Amount is required');
        f =false;
    }
    if(basic_amount=='')
    {
        //  alert('ba');
        $('#basic_amount').html('Basic Amount is required');
        f =false;
    }
    if(gst_percent=='')
    {
        //  alert('gp');
        $('#gst_percent').html('GST Percent is required');
        f =false;
    }
    if(gst_amount=='')
    {
        //  alert('ga');
        $('#gst_amount').html('GST Amount is required');
        f =false;
    }
    if(gst_total_amount=='')
    {
        //  alert('gta');
        $('#gst_total_amount').html('Purachase Amount is required');
        f =false;
    }
    var inventory_id_set = $('.in_item_id').val();
    if(f==false)
    {
        // $('.add_in').attr('disabled','disabled');
        f =false;
    }
    else
    {
        //alert('sdfsdfskhj');
        //$('.form_sub').attr('onsubmit','true');
        //$('.form_sub').submit();
        //$('.add_in').removeAttr('disabled');


        var invoice_date = $('.invoice_date').val();
        var billno = $('.billno').val();
        $('.loading_img').show();

            /*  alert(invoice_date+' '+billno+' '+item_id+hsn_code+' '+purchase_from+' '+qty+' '+ggst_amt+' '+basic_amount+' '+gst_percent+' '+gst_amount+' '+gst_total_amount+' '+names+' '+inventory_id_set); */
            $.ajax({
                type: "POST",
                url: "../../admin/saveinventory",
                data:{serial_allow:serial_allow,invoice_date:invoice_date,billno:billno,item_enter:'1',item_id:item_id,hsn_code:hsn_code,purchase_from:purchase_from,qty:qty,ggst_amt:ggst_amt,basic_amount:basic_amount,gst_percent:gst_percent,gst_amount:gst_amount,gst_total_amount:gst_total_amount,serial:names,inventory_id_set:inventory_id_set,rate:rate,uom:uom},
                success: function(data){
                    /* alert(data); */
                    var final = data.split(',');
                     //alert('edit code run');
                     // alert(data);
                    if(data.trim() =='0')
                    {
                        $('.something').html('Something Error');
                    }
                    else if(final[0] == 1){
                        //alert('dfkj');
                        $('.final_data1').append('<tr id="'+final[8]+'"><td>'+final[1]+'</td><td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td><a class="btn btn-info edit_item" alt="'+final[8]+'" onclick="edit_in_item2('+final[8]+')"> Edit </a></td></tr>');
                        $('#final_total').html('<td>Total</td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td></td><td>'+final[12]+'</td><td>'+final[13]+'</td><td></td>');
                        $('.loading_img').hide();
                        $('#add_item').modal('toggle');
                        disable_purchase();
                        $('.form_sub')[0].reset();
                        $('.in_item_id').val(final[9]);
                    }
                    else if(final[0] =='2'){
                        //$('.okgst').hide();
                        //$('.nogst').show();
                        $('.final_data1').append('<tr id="'+final[8]+'"><td>'+final[1]+'</td><td>'+final[2]+'</td><td>'+final[3]+'</td><td>'+final[4]+'</td><td>'+final[5]+'</td><td>'+final[6]+'</td><td>'+final[7]+'</td><td><a class="btn btn-info edit_item" alt="'+final[8]+'" onclick="edit_in_item2('+final[8]+')"> Edit </a></td></tr>');
                        $('#final_total').html('<td>Total</td><td>'+final[10]+'</td><td></td><td>'+final[11]+'</td><td></td><td>'+final[12]+'</td><td>'+final[13]+'</td><td></td>');
                        $('.loading_img').hide();
                        $('#add_item').modal('toggle');
                        disable_purchase();
                        $('.form_sub')[0].reset();
                        $('.in_item_id').val(final[9]);
                    }
                }
            });

        if($('.final_data1').is(':empty'))
        {
            $('.final_btn_set').html('');
        }
        else{
            $('.final_btn_set').html('<input type="submit" class="btn btn-success" value="Add Inventory" /> &nbsp; &nbsp; <a href="http://dig.projexis.co.in/admin/viewinventory" class="btn btn-warning">Cancel</a>');
            $('.form_sub').append('<input type="hidden" name="inventory_id" value="'+inventory_id_set+'" />');
        }
    }






    return true;

}



function edit_in_item(item_id) {
    $.ajax({
        type: "POST",
        url: "../api/edit_in_item",
        data: {
            item_id: item_id,
        },
        success: function (data) {
            var final_data = data.trim();

            if(final_data.length > 0)
            {
                $('#edit_in_item').modal('show');
                $('.update_in_item').html(final_data);
            }
            else{
                alert('not work');
            }
        }
    });
}


function calculate_basic_amt()
{
    var qty = parseInt($('.quantity').val());
    var rate = parseInt($('.rate').val());
    var basic_amount = qty * rate;
    $('.ggst_total_amount').val(basic_amount);
    $('.basic_amt').val(basic_amount);
}


function edit_in_item2(item_id) {


   // alert(item_id);
    $.ajax({
        type: "POST",
        url: "../../api/edit_in_item2",
        data: {
            item_id: item_id,
        },
        success: function (data) {
            var final_data = data.trim();

            if(final_data.length > 0)
            {
                $('#edit_in_item').modal('show');
                $('.update_in_item').html(final_data);
            }
            else{
                alert('not work');
            }
        }
    });
}
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


function invoice_bill() {
//alert();
   var invoice_date = $('.invoice_date').val();
    var billno = $('.billno').val();
    var purchase_from = $('.purchase_from').val();


    if(invoice_date=='')
    {
        $('#invoice_date').html('Invoice Date required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{ $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); }
    if(billno =='')
    {
        $('#billno').html('Bill Number required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{ $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); }

    if(purchase_from =='')
    {
        $('#purchase_from').html('Select Supplier is required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{
        supplier_gst_detail(purchase_from);
        $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); $('#purchase_from').html('');
    }

}

function invoice_bill2() {
//alert();
    var invoice_date = $('.invoice_date').val();
    var billno = $('.billno').val();
    var purchase_from = $('.purchase_from').val();


    if(invoice_date=='')
    {
        $('#invoice_date').html('Invoice Date required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{ $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); }
    if(billno =='')
    {
        $('#billno').html('Bill Number required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{ $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); }

    if(purchase_from =='')
    {
        $('#purchase_from').html('Select Supplier is required');
        $('.add_item_btn').attr('disabled','disabled');
    }
    else{
        supplier_gst_detail2(purchase_from);
        $('.add_item_btn').removeAttr('disabled'); $('#invoice_date').html(''); $('#billno').html(''); $('#purchase_from').html('');
    }

}

    function disable_purchase()
{
    $('.purchase_from').attr('disabled','disabled');
}


/*
$(function () {

     $('.add_item_ledger').click(function () {
                        var formData = new FormData();
                        formData.append('invoice_date', $('.invoice_date').val());
                        formData.append('item_id', $('.item_id').val());
                        formData.append('item_name', $('.item_name').val());
                        formData.append('purchase_from', $('.purchase_from').val());
                        formData.append('main_cat_id', $('.main_cat_id').val());
                        formData.append('cat_id', $('.cat_id').val());
                        formData.append('sub_cat_id', $('.sub_cat_id').val());
                        formData.append('qty', $('.quantity').val());
                        formData.append('make', $('.make').val());
                       */