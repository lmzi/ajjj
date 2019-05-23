/* 
* @Author: Administrator
* @Date:   2019-05-17 11:25:25
* @Last Modified by:   Administrator
* @Last Modified time: 2019-05-20 17:49:20
*/

'use strict';
window.onload=function(){
// 轮播1
	var mySwiper = new Swiper ('.swiper-container', {
    autoplay:true,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项


    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  /*鼠标移入停止轮播，鼠标离开 继续轮播*/
     var comtainer = document.getElementById('swiper_container');
    comtainer.onmouseenter = function () {
        mySwiper.autoplay.stop();
    };
    // 鼠标离开 继续轮播
    comtainer.onmouseleave = function () {
        mySwiper.autoplay.start();
    }

















   
         





























}
