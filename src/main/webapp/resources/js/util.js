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
