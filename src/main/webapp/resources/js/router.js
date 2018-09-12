"use strict"; //기능과 속성 function도 객체...자바스크립트에서는
function Session(x){ //대문자로 쓰면 new 생성자로 쓸아이들 (feat.더글라스)
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('script',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		script : ()=>{return sessionStorage.getItem('script');},
		style : ()=>{return sessionStorage.getItem('style');},
		img : ()=>{return sessionStorage.getItem('img');}
		
	};
}
