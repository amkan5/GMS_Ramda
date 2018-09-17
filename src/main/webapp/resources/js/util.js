"use strict"; //기능과 속성 function도 객체...자바스크립트에서는
/*var nullChecker = x=>{ //리턴이 true or false
		var i = 0;
		var j = {
				checker : true,
				text : '필수입력값이 없습니다'
		};
		for (i in x) {
			if(x[i]===''){
				j.checker = false;
			}
		}
		return j;
}*/
$.prototype.nullChecker=x=>{
	let flag = true;
	let i = 0;
	for (i in x){
		if(x[i]===''){
			flag = false;
		}
	}
	return flag;
}
$.prototype.zeroChecker=x=>{
	let flag = true;
	let i = 0;
	for (i in x){
		if(x[i]===0){
			flag = false;
		}
	}
	return flag;
}
$.prototype.anchor=x=>{  
	return $('<a/>')
	.attr({href : '#'})
	.html(x.txt);
}
//얘가 안먹는 이유는. 비동기 처리방식을 사용하기 때문에. JS파엘의 로드를 요청하고 나서 
// 다음 로직을 실행함. Asynchronous  
// promise, when 문법 사용해서 이문제를 극뽁 
// Asyncho => AJAX => Nodejs
//$ = sync 공간
//언제 이 화면을 쓸꺼야 synch인지 asynch인지 개발자가 판단. 화면은 전부 asynch



