function number_positive(values, divclass, btnclass)
{
    $('.'+btnclass).removeAttr('disabled');
    $(divclass).html('');
    if($.isNumeric(values))
    {
        var num = parseInt(values);
        if(num < 0)
        {
            $(divclass).html('Number Should be positive.');
            $('.'+btnclass).attr('disabled','disabled');
        }
        else{
            $('.'+btnclass).removeAttr('disabled');
        }
    }
    else{
        $(divclass).html('Enter Number Only.');
        $('.'+btnclass).attr('disabled','disabled');
    }

}


function add_field(id,incr) {

    var msg = '<div class="row field'+incr+'">\n' +
        '<input type="hidden" name="cat_id[]" value="'+id+'">'+
        '                                <div class="col-lg-2 col-md-3 col-xs-12 form-group">\n' +
        '                                    <input type="text" placeholder="Amount" class="form-control" name="amount[]" required>\n' +
        '                                </div>\n' +
        '                                <div class="col-lg-2 col-md-3 col-xs-12 form-group">\n' +
        '                                    <input type="text" placeholder="Bill No" class="form-control" name="bill_no[]">\n' +
        '                                </div>\n' +
        '                                <div class="col-lg-2 col-md-3 col-xs-12 form-group">\n' +
        '                                    <input type="date" placeholder="Date" class="form-control" name="exp_date[]" required id="datetimepicker3">\n' +
        '                                </div>\n' +
        '                                <div class="col-lg-3 col-md-3 col-xs-12 form-group">\n' +
        '                                    <textarea placeholder="Description" class="form-control" name="description[]"></textarea>\n' +
        '                                </div>\n' +
        '                                <div class="col-lg-3 col-md-3 col-xs-12 form-group">\n' +
        '                                    <button type="button" onclick="removefield('+id+','+incr+');" class="btn btn-danger btn-icon-anim btn-square " data-toggle="tooltip" title="Add New Item" title="Add New Item"><i class="fa fa-trash fa-lg"></i></button>\n' +
        '                                </div>\n' +
        '                            </div>';

        $('.add_field'+id).append(msg);
        $('.bbtn'+id).attr('onclick','add_field('+id+','+(incr+1)+');');
}

function removefield(id,incr) {
    $('.add_field'+id).find('.field'+incr).remove();
}