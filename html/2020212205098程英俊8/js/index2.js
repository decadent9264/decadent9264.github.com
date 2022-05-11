/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-19 19:27:20
 * @version $Id$
 */
$(".m-body1").show();
	$(".m-body2").hide();
	$(".m-body3").hide();
$(".m-tab1").click(function (e) {
	$(".m-tab1").css("background","grey");
	$(".m-tab2").css("background","#fff");
	$(".m-tab3").css("background","#fff");
	$(".m-body1").show();
	$(".m-body2").hide();
	$(".m-body3").hide();
});
$(".m-tab2").click(function (e) {
	$(".m-tab1").css("background","#fff");
	$(".m-tab2").css("background","grey");
	$(".m-tab3").css("background","#fff");
	$(".m-body1").hide();
	$(".m-body2").show();
	$(".m-body3").hide();
});
$(".m-tab3").click(function (e) {
	$(".m-tab1").css("background","#fff");
	$(".m-tab2").css("background","#fff");
	$(".m-tab3").css("background","grey");
	$(".m-body1").hide();
	$(".m-body2").hide();
	$(".m-body3").show();
});