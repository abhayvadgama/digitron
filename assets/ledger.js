function supplier_gst_detail(purchase_from)
{

    $.ajax({
        type: "POST",
        url: "../api/gst_with_without",
        data: {name:purchase_from},
        success: function(data){
            //  alert(data);
            if(data.trim() =='0')
            {
                $( ".without_gst" ).show();
                $( ".without_gst" ).html('<label for="inputTwitter" class="control-label mb-10">Purchase Amount</label>' +
                    '                                                    <input  type="text" class="form-control ggst_total_amount" id="inputTwitter" placeholder="Enter Purchase Amount"' +
                    '                                                          name="gst_total_amount" onkeypress="validate(event)">' +
                    '<span id="ggst_total_amount" class=" label label-danger"></span>');
                $( ".with_gst" ).html('');
                $( ".with_gst" ).hide();
                $( ".basic_amt" ).val('');
                $( ".cal_gst_percent" ).val('');
                $( ".gst_amount" ).val('');
                $( ".gst_total_amount" ).val('');

            }
            else
            {
                $( ".ggst_total_amount" ).val('');
                $( ".with_gst" ).html('<div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">Basic Amount</label>' +
                    '                                                    <input type="text" class="form-control basic_amt" id="" placeholder="Enter Purchase Amount"' +
                    '                                                           name="basic_amount" >' +
                    '<span id="basic_amount" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">GST Percentage</label>' +
                    '                                                    <input type="text" class="form-control cal_gst_percent gst_percent" id="" placeholder="Enter GST Percent"' +
                    '                                                           name="gst_percent" onkeyup="with_gst(this.value);">' +
                    '<span id="gst_percent" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">GST Amount</label>' +
                    '                                                    <input type="text" class="form-control gst_amount" id="" placeholder="Enter GST Amount"' +
                    '                                                           name="gst_amount" >' +
                    '<span id="gst_amount" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">Purchase Amount</label>' +
                    '                                                    <input type="text" class="form-control gst_total_amount" id="" placeholder="Enter Purchase Amount"' +
                    '                                                           name="gst_total_amount" >' +
                    '<span id="gst_total_amount" class=" label label-danger"></span>' +
                    '                                                </div>');
                $( ".without_gst" ).html('');
                $( ".without_gst" ).hide();
                $( ".with_gst" ).show();
            }
        }
    });

}

/* Edit inventory data */

function supplier_gst_detail2(purchase_from)
{

    $.ajax({
        type: "POST",
        url: "../../api/gst_with_without",
        data: {name:purchase_from},
        success: function(data){
            //  alert(data);
            if(data.trim() =='0')
            {
                $( ".without_gst" ).show();
                $( ".without_gst" ).html('<label for="inputTwitter" class="control-label mb-10">Purchase Amount</label>' +
                    '                                                    <input  type="text" class="form-control ggst_total_amount" id="inputTwitter" placeholder="Enter Purchase Amount"' +
                    '                                                          name="gst_total_amount" onkeypress="validate(event)">' +
                    '<span id="ggst_total_amount" class=" label label-danger"></span>');
                $( ".with_gst" ).html('');
                $( ".with_gst" ).hide();
                $( ".basic_amt" ).val('');
                $( ".cal_gst_percent" ).val('');
                $( ".gst_amount" ).val('');
                $( ".gst_total_amount" ).val('');

            }
            else
            {
                $( ".ggst_total_amount" ).val('');
                $( ".with_gst" ).html('<div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">Basic Amount</label>' +
                    '                                                    <input type="text" class="form-control basic_amt" id="" placeholder="Enter Purchase Amount"' +
                    '                                                           name="basic_amount" >' +
                    '<span id="basic_amount" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">GST Percentage</label>' +
                    '                                                    <input type="text" class="form-control cal_gst_percent gst_percent" id="" placeholder="Enter GST Percent"' +
                    '                                                           name="gst_percent" onkeyup="with_gst(this.value);">' +
                    '<span id="gst_percent" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">GST Amount</label>' +
                    '                                                    <input type="text" class="form-control gst_amount" id="" placeholder="Enter GST Amount"' +
                    '                                                           name="gst_amount" >' +
                    '<span id="gst_amount" class=" label label-danger"></span>' +
                    '                                                </div>' +
                    '                                                <div class="form-group col-lg-3 col-md-3 col-xs-12 ">' +
                    '                                                    <label for="inputTwitter" class="control-label mb-10">Purchase Amount</label>' +
                    '                                                    <input type="text" class="form-control gst_total_amount" id="" placeholder="Enter Purchase Amount"' +
                    '                                                           name="gst_total_amount" >' +
                    '<span id="gst_total_amount" class=" label label-danger"></span>' +
                    '                                                </div>');
                $( ".without_gst" ).html('');
                $( ".without_gst" ).hide();
                $( ".with_gst" ).show();
            }
        }
    });

}


function item_name_selection(item)
{
if(item == 'search')
{
    $('.item_selection').show();
    $('.item_id').attr('required','required');
    $('#item_name').removeAttr('required');
    $('.item_name').hide();
    $('.add_item_details').hide();
    $('.select_make').hide();
    $('.gst_percent_text').hide();


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
$('.hsn_code').val('');


}
else if(item == 'add')
{
    $('.item_selection').hide();
    $('.item_id').removeAttr('required');
    $('#item_name').attr('required','required');
    $('.item_name').show();
    $('.add_item_details').show();
    $('.select_make').show();
    $('.gst_percent_text').show();


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
    $('.hsn_code').val('');

}
}



function item_fetch(name) {
    //var select_text = $("#item_id option:selected").text();
    //$("#item_name").val(select_text);
//alert(name);
    $('.make option').removeAttr("selected");
    $('#main_cat_name').val('');
    $('#cat_name').val('');
    $('#sub_cat').val('');



    $.ajax({
        type: "get",
        url: "../api/get_inventory_item",
        data: {name: name},
        success: function (data) {

            if (data.trim() != "") {
                var datas = data.split(',');
                //$( ".make" ).find( 'option[value="' + datas[0] + '"]' ).prop( "selected", true );
                //$( "#main_cat_name" ).val(datas[1]);
                //$( "#cat_name" ).val(datas[2]);
                //$( "#sub_cat" ).val(datas[3]);

                $(".hsn_code").val(datas[4]);
                $(".edit_hsn_code").val(datas[4]);
            }
        }
    });



}

function item_fetch2(name) {
    //var select_text = $("#item_id option:selected").text();
    //$("#item_name").val(select_text);
//alert(name);
    $('.make option').removeAttr("selected");
    $('#main_cat_name').val('');
    $('#cat_name').val('');
    $('#sub_cat').val('');



    $.ajax({
        type: "get",
        url: "../../api/get_inventory_item",
        data: {name: name},
        success: function (data) {

            if (data.trim() != "") {
                var datas = data.split(',');
                //$( ".make" ).find( 'option[value="' + datas[0] + '"]' ).prop( "selected", true );
                //$( "#main_cat_name" ).val(datas[1]);
                //$( "#cat_name" ).val(datas[2]);
                //$( "#sub_cat" ).val(datas[3]);
                $(".hsn_code").val(datas[4]);
                $(".edit_hsn_code").val(datas[4]);

            }
        }
    });



}

$(function() {
    $(".main_cat_name").change(function(){
        var del = $(this).val();

        $.ajax({
            type: "POST",
            url: "http://dig.projexis.co.in/api/get_cat",
            data: {mcid:del},
            success: function(data){
                $('.cat_name').html(data)
            }
        });
    });
    $(".cat_name").change(function(){
        var del = $(this).val();
        //alert(del);
        $.ajax({
            type: "POST",
            url: "http://dig.projexis.co.in/api/get_sub_cat",
            data: {cid:del},
            success: function(data){
                //  alert(data);
                $('.sub_cat').html(data)
            }
        });
    });

    $("#gst_percent").keyup(function(){
        var del = $(this).val();
        $('.res_gst').html('');
        if(del < 1)
        {
            $('.res_gst').html('GST Percentage must be (min 1 % max 28 %)');
            $('.add_item_btn').attr('disabled','disabled');
        }
        else if (del > 28)
        {
            $('.res_gst').html('GST Percentage must be (min 1 % max 28 %)');
            $('.add_item_btn').attr('disabled','disabled');
        }
        else {
            $('.add_item_btn').removeAttr('disabled','disabled');
            $('.add_item_btn').removeAttr('disabled','disabled');
        }
    });
});