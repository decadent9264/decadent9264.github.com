/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-19 20:12:38
 * @version $Id$
 */

var num = 0; 

$('body').on('click', '.m-add', (e) => {
  doAdd(e);
})

$('body').on('click', '.m-del', (e) => {
  doDel(e);
})

function doAdd(e) {
  let t = e.currentTarget;
  let item = `<div class="m-hang"><div class="m-lie1">${++num}</div><div class="m-lie2"></div><div class="m-del">Delete</div></div>`
  $(t).prev().append(item);
}

function doDel(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

function upload() {
  let contentList = $('.m-data').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.u-lie1').text(num - (--i));
  })
}