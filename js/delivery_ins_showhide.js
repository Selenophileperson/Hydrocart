$(document).ready(function(){
    $(".weekend_delivery_avail").click(function(){
        $(".weekend_deliveries").show();
		$(".add_additional_info,.whr_leave_pack").hide();
    });

    $(".share_addi_info").click(function(){
        $(".add_additional_info").show();
		$(".weekend_deliveries,.whr_leave_pack").hide();
    });
    
    $(".whr_lev_yourpack").click(function(){
        $(".whr_leave_pack").show();
		$(".add_additional_info,.weekend_deliveries").hide();
    });    
})

$(document).ready(function(){
  $('.weekend_delivery_avail').click(function(){
    $('.share_addi_info,.whr_lev_yourpack').removeClass("de_ins_list_active");
    $(this).addClass("de_ins_list_active");
});
});
$(document).ready(function(){
  $('.share_addi_info').click(function(){
    $('.weekend_delivery_avail,.whr_lev_yourpack').removeClass("de_ins_list_active");
    $(this).addClass("de_ins_list_active");
});
});
$(document).ready(function(){
  $('.whr_lev_yourpack').click(function(){
    $('.share_addi_info,.weekend_delivery_avail').removeClass("de_ins_list_active");
    $(this).addClass("de_ins_list_active");
});
});

















