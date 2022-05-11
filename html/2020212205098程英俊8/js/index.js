/**
*
* @authors Your Name (you@example.org)
* @date    2022-04-13 09:36:36
* @version $Id$
*/
$("body").click(function (e) {
   let $b = $(e.currentTarget).children();
   $b.eq(0).children().eq(1).addClass('hide');
});

$("div.m-tu").click(function(e){
   picExpand(e);
   e.stopPropagation();
});

function picExpand(e) {
  let t = e.currentTarget;
  let len = $(t).parent().parent().children().length;
  let $d = $(t).parent().next();
  $d.removeClass('hide');
  $d.find('.m-tu').remove();
  $d.append($(t).clone()); 
}