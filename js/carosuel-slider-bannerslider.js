$(function(){
switchable({
$element: $('#slides')
,interval:7000
,animateSpeed:500

});
switchable({
$element: $('#slides1')
,interval: 2000
,effect: 'fade'
});
switchable({
$element: $('#scroll_wrap')
,interval: 5000
,showNav: true
//,effect: 'fade'
,type: 'imgScroll'
,imgScroll: {
num: 0
}
});
});









$(document).ready(function() {
$('#carousel').waltzer({
scroll:1, 
circular:true
});
});


$(document).ready(function() {
$('#carousel2').waltzer({
scroll:1, 
circular:true
});
});

$(document).ready(function() {
$('#carousel3').waltzer({
//auto:true, 
scroll:1, 
circular:true, 
offset:2
});
});

$(document).ready(function() {
$('#carousel4').waltzer({
//auto:true, 
scroll:1, 
circular:true, 
offset:2
});
});

    

/* moblie view */
$(document).ready(function() {
$('#carouselmob1').waltzer({
scroll:1, 
circular:true
});
});
$(document).ready(function() {
$('#carouselmob2').waltzer({
scroll:1, 
circular:true
});
});
$(document).ready(function() {
$('#carouselmob3').waltzer({
scroll:1, 
circular:true
});

});


/* moblie view end */
