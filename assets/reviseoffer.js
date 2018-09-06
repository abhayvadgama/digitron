/* ANNEXURE - I A Function */
function Aqty(rate, id) {

    var Aqty = $(".Aunit_rate" + id).val();  // qty
    var total = (Aqty * rate); // multiple qty to rate
$('.anncqty'+id).val(rate);
    $('.Atotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Agst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Agst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Agrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.incr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;

    for (h = 1; h <= totrow; h++) {


        if ($('.Agrand_total' + h).val() && $('.Atotal_amt' + h).val() != 'NaN') {
            tot_gst_amt += parseInt($('.Agst_amount'+ h).val());
            y += parseInt($('.Agrand_total' + h).val());
            z += parseInt($('.Atotal_amt' + h).val());
        }
        // alert('test');
    }

    $('.Agrand_tot').text(y);
    $('.FA_GTOT').text(y);
    $('.FA_TOT').text(z);$('.FA_GST').text(tot_gst_amt);
    $('.Atot').text(z);

    fcal();
    

}

function unitrate(rate, id) {


    var Aqty = $(".Aqty" + id).val();  // qty

    var total = (Aqty * rate); // multiple qty to rate

    $('.Atotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Agst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Agst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Agrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.incr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Agrand_total' + h).val() && $('.Atotal_amt' + h).val() != 'NaN') {

tot_gst_amt += parseInt($('.Agst_amount'+ h).val());
            y += parseInt($('.Agrand_total' + h).val());
            z += parseInt($('.Atotal_amt' + h).val());
        }
    }

    $('.Agrand_tot').text(y);
    $('.Atot').text(z);
    $('.FA_TOT').text(z);$('.FA_GST').text(tot_gst_amt);
    $('.FA_GTOT').text(y);

    fcal();

}

function gstper(rate, id) {


    // var Aqty =$(".Aqty"+id).val();  // qty

    //var total =(Aqty * rate); // multiple qty to rate

    var total = $('.Atotal_amt' + id).val(); //total amount

    var Agst_percent = rate;

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Agst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = parseInt(gst_total) + parseInt(total);    // grand total calculation

    $('.Agrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.incr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Agrand_total' + h).val() && $('.Atotal_amt' + h).val() != 'NaN') {
tot_gst_amt += parseInt($('.Agst_amount'+ h).val());

            y += parseInt($('.Agrand_total' + h).val());
            z += parseInt($('.Atotal_amt' + h).val());
        }
    }

    $('.Agrand_tot').text(y);
    $('.Atot').text(z);$('.FA_TOT').text(z);$('.FA_GST').text(tot_gst_amt);
    $('.FA_GTOT').text(y);

    fcal();

}

function Adelitem() {

    var totrow = $('.incr').val();

    var y = 0;
    var z = 0;var tot_gst_amt=0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Agrand_total' + h).val() && $('.Atotal_amt' + h).val() != 'NaN') {
tot_gst_amt += parseInt($('.Agst_amount'+ h).val());

            y += parseInt($('.Agrand_total' + h).val());
            z += parseInt($('.Atotal_amt' + h).val());
        }
    }


    $('.Agrand_tot').text(y);
    $('.Atot').text(z);$('.FA_TOT').text(z);$('.FA_GST').text(tot_gst_amt);
    $('.FA_GTOT').text(y);

    fcal();


}

/* ANNEXURE - I B Function */

function Bqty(rate, id) {
$('.bnncqty'+id).val(rate);
    var Aqty = $(".Bunit_rate" + id).val();  // qty

    var total = (Aqty * rate); // multiple qty to rate

    $('.Btotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Bgst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Bgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Bgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Bincr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Bgrand_total' + h).val() && $('.Btotal_amt' + h).val() != 'NaN') {
tot_gst_amt += parseInt($('.Bgst_amount'+ h).val());
            y += parseInt($('.Bgrand_total' + h).val());
            z += parseInt($('.Btotal_amt' + h).val());
        }
        // alert('test');
    }

    $('.Bgrand_tot').text(y);
    $('.Btot').text(z);
    $('.FB_GTOT').text(y);$('.FB_TOT').text(z);$('.FB_GST').text(tot_gst_amt);
    fcal();

}

function Bunitrate(rate, id) {


    var Aqty = $(".Bqty" + id).val();  // qty

    var total = (Aqty * rate); // multiple qty to rate

    $('.Btotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Bgst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Bgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Bgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Bincr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Bgrand_total' + h).val() && $('.Btotal_amt' + h).val() != 'NaN') {

tot_gst_amt += parseInt($('.Bgst_amount'+ h).val());
            y += parseInt($('.Bgrand_total' + h).val());
            z += parseInt($('.Btotal_amt' + h).val());
        }
    }

    $('.Bgrand_tot').text(y);
    $('.Btot').text(z);
    $('.FB_GTOT').text(y);$('.FB_TOT').text(z);$('.FB_GST').text(tot_gst_amt);
    fcal();

}

function Bgstper(rate, id) {


    // var Aqty =$(".Aqty"+id).val();  // qty

    //var total =(Aqty * rate); // multiple qty to rate

    var total = $('.Btotal_amt' + id).val(); //total amount

    var Agst_percent = rate;

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Bgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = parseInt(gst_total) + parseInt(total);    // grand total calculation

    $('.Bgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Bincr').val();

    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Bgrand_total' + h).val() && $('.Btotal_amt' + h).val() != 'NaN') {

            y += parseInt($('.Bgrand_total' + h).val());
            tot_gst_amt += parseInt($('.Bgst_amount'+ h).val());
            z += parseInt($('.Btotal_amt' + h).val());

        }
    }

    $('.Bgrand_tot').text(y);
    $('.Btot').text(z);
    $('.FB_GTOT').text(y);$('.FB_TOT').text(z);$('.FB_GST').text(tot_gst_amt);
    fcal();

}

function Bdelitem() {

    var totrow = $('.Bincr').val();

    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Bgrand_total' + h).val() && $('.Btotal_amt' + h).val() != 'NaN') {
tot_gst_amt += parseInt($('.Bgst_amount'+ h).val());    

            y += parseInt($('.Bgrand_total' + h).val());
            z += parseInt($('.Btotal_amt' + h).val());
        }
    }


    $('.Bgrand_tot').text(y);
    $('.Btot').text(z);
    $('.FB_GTOT').text(y);$('.FB_TOT').text(z);$('.FB_GST').text(tot_gst_amt);
    fcal();


}

/* ANNEXURE - I C Function */
function Cqty(rate, id) {

    var Aqty = $(".Cunit_rate" + id).val();  // qty

    var total = (Aqty * rate); // multiple qty to rate

    $('.Ctotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Cgst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Cgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Cgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Cincr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Cgrand_total' + h).val() && $('.Ctotal_amt' + h).val() != 'NaN') {

tot_gst_amt += parseInt($('.Cgst_amount'+ h).val());
            y += parseInt($('.Cgrand_total' + h).val());
            z += parseInt($('.Ctotal_amt' + h).val());
        }
        // alert('test');
    }

    $('.Cgrand_tot').text(y);
    $('.Ctot').text(z);
    $('.FC_GTOT').text(y);$('.FC_TOT').text(z);$('.FC_GST').text(tot_gst_amt);
    fcal();

}

function Cunitrate(rate, id) {


    var Aqty = $(".Cqty" + id).val();  // qty

    var total = (Aqty * rate); // multiple qty to rate

    $('.Ctotal_amt' + id).val(total); //total amount

    var Agst_percent = $(".Cgst_percent" + id).val();

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Cgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = gst_total + total;    // grand total calculation

    $('.Cgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Cincr').val();
    var y = 0;
    var z = 0;var tot_gst_amt=0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Cgrand_total' + h).val() && $('.Ctotal_amt' + h).val() != 'NaN') {

tot_gst_amt += parseInt($('.Cgst_amount'+ h).val());
            y += parseInt($('.Cgrand_total' + h).val());
            z += parseInt($('.Ctotal_amt' + h).val());
        }
    }

    $('.Cgrand_tot').text(y);
    $('.Ctot').text(z);$('.FC_TOT').text(z);$('.FC_GST').text(tot_gst_amt);
    $('.FC_GTOT').text(y);
    fcal();

}

function Cgstper(rate, id) {


    // var Aqty =$(".Aqty"+id).val();  // qty

    //var total =(Aqty * rate); // multiple qty to rate

    var total = $('.Ctotal_amt' + id).val(); //total amount

    var Agst_percent = rate;

    var gst_total = (total * Agst_percent) / 100; //Gst Amount calculation

    $('.Cgst_amount' + id).val(gst_total); //gst_total amount

    var grand_total = parseInt(gst_total) + parseInt(total);    // grand total calculation

    $('.Cgrand_total' + id).val(grand_total); //grand total amount

    var totrow = $('.Cincr').val();
    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Cgrand_total' + h).val() && $('.Ctotal_amt' + h).val() != 'NaN') {
tot_gst_amt += parseInt($('.Cgst_amount'+ h).val());
            y += parseInt($('.Cgrand_total' + h).val());
            z += parseInt($('.Ctotal_amt' + h).val());
        }
    }

    $('.Cgrand_tot').text(y);
    $('.Ctot').text(z);
    $('.FC_GTOT').text(y);$('.FC_TOT').text(z);$('.FC_GST').text(tot_gst_amt);
    fcal();

}

function Cdelitem() {

    var totrow = $('.Cincr').val();

    var y = 0;var tot_gst_amt=0;
    var z = 0;
    for (h = 1; h <= totrow; h++) {
        if ($('.Cgrand_total' + h).val() && $('.Ctotal_amt' + h).val() != 'NaN') {

tot_gst_amt += parseInt($('.Cgst_amount'+ h).val());
            y += parseInt($('.Cgrand_total' + h).val());
            z += parseInt($('.Ctotal_amt' + h).val());
        }
    }


    $('.Cgrand_tot').text(y);
    $('.Ctot').text(z);
    $('.FC_GTOT').text(y);$('.FC_TOT').text(z);$('.FC_GST').text(tot_gst_amt);
    fcal();

}

function fcal() {

    var A = $('.FA_GTOT').text();
    var B = $('.FB_GTOT').text();
    var C = $('.FC_GTOT').text();

   var  x=0;var  xx=0;var  xxx=0;
    var  y=0;var  yy=0;var  yyy=0;
    var  z=0;var  zz=0;var  zzz=0;

    if ($('.FA_GTOT').text() != '') {

        x = parseInt($('.FA_GTOT').text());
    }

    if ($('.FB_GTOT').text() != '') {


        y = parseInt($('.FB_GTOT').text());
    }
    if ($('.FC_GTOT').text() != '') {

        z = parseInt($('.FC_GTOT').text());
    }
     if($('.FA_TOT').text()!='') {
        xx = parseInt($('.FA_TOT').text());
    }
    if($('.FB_TOT').text()!='') {
        yy = parseInt($('.FB_TOT').text());
    }
    if($('.FC_TOT').text()!='') {
        zz = parseInt($('.FC_TOT').text());
    }
    if($('.FA_GST').text()!='') {
        xxx = parseInt($('.FA_GST').text());
    }
    if($('.FB_GST').text()!='') {
        yyy = parseInt($('.FB_GST').text());
    }
    if($('.FC_GST').text()!='') {
        zzz = parseInt($('.FC_GST').text());
    }



  var gtot=0;ttot=0;gsttot=0;
    gtot= x + y + z ;
    ttot= xx + yy + zz ;
    gsttot= xxx + yyy + zzz ;

    $('.fg_total').text(gtot);
    $('.grand_total_wo_gst').text(ttot);
    $('.grand_totalgst').text(gsttot);

}

/* validation */

$('.submit_offer').click(function () {

    var totrow = $('.incr').val();
    var f = true;
    for (h = 1; h <= totrow; h++) {

        if ($('.Aitem_id' + h).val() == '') {
            swal({
                title: "Annexure - I A",
                text: "Please Select Item Name in Annexure - I A",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Aunit' + h).val() == '') {

            swal({
                title: "Annexure - I A",
                text: "Please Select Unit in Annexure - I A",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Aqty' + h).val() == '') {
            swal({
                title: "Annexure - I A",
                text: "Please Enter Quantity in Annexure - I A",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Aunit_rate' + h).val() == '') {

            swal({
                title: "Annexure - I A",
                text: "Please Enter UnitRate in Annexure - I A",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Agst_percent' + h).val() == '') {

            swal({
                title: "Annexure - I A",
                text: "Please Enter Gst Percent in Annexure - I A",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }

        // B

        if ($('.Bitem_id' + h).val() == '') {
            swal({
                title: "Annexure - I B",
                text: "Please Select Item Name in Annexure - I B",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Bunit' + h).val() == '') {
            swal({
                title: "Annexure - I B",
                text: "Please Select Unit in Annexure - I B",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Bqty' + h).val() == '') {
            swal({
                title: "Annexure - I B",
                text: "Please Enter Quantity in Annexure - I B",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Bunit_rate' + h).val() == '') {

            swal({
                title: "Annexure - I B",
                text: "Please Enter UnitRate in Annexure - I B",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Bgst_percent' + h).val() == '') {

            swal({
                title: "Annexure - I B",
                text: "Please Enter Gst Percent in Annexure - I B",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }

        // C

        if ($('.Citem_id' + h).val() == '') {

            swal({
                title: "Annexure - I C",
                text: "Please Select Item Name in Annexure - I C",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Cunit' + h).val() == '') {

            swal({
                title: "Annexure - I C",
                text: "Please Select Unit in Annexure - I C",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Cqty' + h).val() == '') {

            swal({
                title: "Annexure - I C",
                text: "Please Select Quantity in Annexure - I C",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }
        else if ($('.Cunit_rate' + h).val() == '') {

            swal({
                title: "Annexure - I C",
                text: "Please Select Unitrate in Annexure - I C",
                confirmButtonColor: "#4e9de6",
            });

            f = false;
        }
        else if ($('.Cgst_percent' + h).val() == '') {
            swal({
                title: "Annexure - I C",
                text: "Please Select  Gst Percent in Annexure - I C",
                confirmButtonColor: "#4e9de6",
            });
            f = false;
        }

        if (f == true) {
            alert('success');
            var totrow = $('.incr').val();

            var y = 0;
            var z = 0;
            for (h = 1; h <= totrow; h++) {
                if ($('.Aitem_id' + h).val() && $('.Aunit' + h).val() != '') {


                    y += parseInt($('.Cgrand_total' + h).val());
                    z += parseInt($('.Ctotal_amt' + h).val());
                }
            }
        }


    }

});




