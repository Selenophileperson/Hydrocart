/* popup forms show hide */
$(document).ready(function(){
$(".signup").click(function(){
$(".signup_form").show();
$(".signin_form,.forget_pw_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .new_pw_form,.thankyou_form").hide();
});

$(".signin").click(function(){
$(".signin_form").show();
$(".signup_form,.forget_pw_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .new_pw_form,.thankyou_form").hide();
});

$(".forget_pw").click(function(){
$(".forget_pw_form").show();
$(".signin_form,.signup_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .new_pw_form,.thankyou_form").hide();
});

/*$(".fpw_sub_btn").click(function(){
$(".hm_forget_pw_otp_form").show();
$(".signin_form,.signup_form,.forget_pw_form,.new_pw_form,.thankyou_form").hide();
});*/

$(".sub_otp_btn").click(function(){
$(".new_pw_form").show();
$(".signin_form,.signup_form,.forget_pw_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .thankyou_form").hide();
});

/*$(".new_pw_subbtn").click(function(){
$(".thankyou_form").show();
$(".signin_form,.signup_form,.forget_pw_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .new_pw_form").hide();
});*/

$(".continue_shop").click(function(){
$(".signin_form").show();
$(".signup_form,.forget_pw_form,.forget_pw_otp_form, .hm_forget_pw_otp_form, .new_pw_form,.thankyou_form").hide();
});

})
/* popup forms show hide end */



/* Orders Details tab */
$(document).ready(function(){
$(".orders").click(function(){
$(".orders_placed").show();
$(".buy_again_sec,.open_orders_sec,.cancel_orders_sec").hide();
});

$(".buy_again").click(function(){
$(".buy_again_sec").show();
$(".orders_placed,.open_orders_sec,.cancel_orders_sec").hide();
});

$(".open_orders").click(function(){
$(".open_orders_sec").show();
$(".buy_again_sec,.orders_placed,.cancel_orders_sec").hide();
});

$(".cancel_orders").click(function(){
$(".cancel_orders_sec").show();
$(".buy_again_sec,.open_orders_sec,.orders_placed").hide();
});

})


$(document).ready(function(){
$('.orders').click(function(){
$('.buy_again, .open_orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.buy_again').click(function(){
$('.orders, .open_orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.open_orders').click(function(){
$('.buy_again, .orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.cancel_orders').click(function(){
$('.buy_again, .open_orders, .orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

/* Orders Details tab end */



