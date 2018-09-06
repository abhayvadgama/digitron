function add_material_field(id) {

    var msg = '<tr class="field'+id+'">\n' +
        '                                    <input type="hidden" class="form-control" name="itid[]" value="'+id+'" required>\n' +
        '                                <td>\n' +
        '                                    <input type="text" placeholder="Item Name" class="form-control" name="item_name[]" required>\n' +
        '                                </td>\n' +
        '                                <td>\n' +
        '                                    <input type="text" placeholder="Quantity" class="form-control" name="qty[]" onkeyup="generate_serial_m(this.value,'+id+');">\n' +
        '<span class="qty_err'+id+' text-danger txt-dark"></span>'+
        '                                </td>\n' +
        '                                <td class="generated_serials'+id+'">\n' +
        '                                </td>\n' +
        '                                <td>\n' +
        '                                    <textarea placeholder="Description" class="form-control" name="description[]"></textarea>\n' +
        '                                </td>\n' +
        '                                <td>\n' +
        '                                    <button type="button" onclick="removefieldd('+id+');" class="btn btn-danger btn-icon-anim btn-square " data-toggle="tooltip" title="Add New Item" title="Add New Item"><i class="fa fa-trash fa-lg"></i></button>\n' +
        '                                </td>\n' +
        '                            </tr>';

    $('.show_materials').append(msg);
    $('.bbtn').attr('onclick','add_material_field('+(id+1)+');');
    $('.final_sub').removeAttr('disabled');
}

function removefieldd(id) {
    $('.field'+id).remove();
    var tt = $('.show_materials').html();
    if(tt.trim() == ''){
        $('.final_sub').attr('disabled','disabled');
    }
}

function generate_serial_m(val,id) {
    $('.qty_err'+id).html('');
    if(val > 0){
        $('.final_sub').removeAttr('disabled');
        var ser = '';
        for (var i=1;i<=val;i++){
            ser+='<input type="text" placeholder="Serial '+i+'" class="form-control mt-5" name="serial'+id+'[]" required>' ;
        }
        $('.generated_serials'+id).html(ser);
        $('.final_sub').removeAttr('disabled');
    }
    else{
        $('.generated_serials'+id).html('');
        $('.qty_err'+id).html('Must be greater than 0');
        var tt = $('.show_materials').html();
            $('.final_sub').attr('disabled','disabled');
    }
}