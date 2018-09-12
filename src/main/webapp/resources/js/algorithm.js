"use strict";
var algo = algo || {};
algo = { //class
		init : x=>{
			alert('step1 '+x);
			//algo.router.onCreate(x);
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			//algo.setContentView();
			algo.router.onCreate(x);
				},
		setContentView : ()=>{
			$('#wrapper').empty();	
		}
	}; //호출해야 만드는애
algo.main = { //main = 변수
		onCreate:()=>{
			alert('step3  :: '+$.ctx());
			algo.main.setContentView(); //class.variable.method
		},
		setContentView:()=>{
			$('#wrapper').html('<h1>알고리즘</h1><h3>수열</h3><div id="content">'
					+'<table id="tbl" style="width:800px;height:300px;'
					+'border-collapse: collapse;border:1px sollid black;margin:0 auto">'
					+ '<td id="t__l" style="width: 50%; border:1px solid black;"></td>'
					+'<td id="t__r" style="width: 50%; border:1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');	
			$('#t__l').html('<a id="arith"><h3>등차수열</h3></a>');
			$('#t__l').append('<a id="fibonacci"><h3>피보나치열</h3></a>');
			$('#t__l').append('<a id="swit"><h3>스위치열</h3></a>');
			$('#t__l').append('<a id="factorial"><h3>팩토리열</h3></a>');
			$('#arith').click(e=>{
				alert('등차수열 선택');
			});
			$('#fibonacci').click(e=>{
				alert('피보나치 선택')
			});
			$('#swit').click(e=>{
				alert('스위치 선택')
			});
			$('#factorial').click(e=>{
				alert('팩토리 선택')
			});
		}
	};
algo.series = {
		arith : x =>{},
		fibonacci : x=>{}, 	//피보나치열
		swit : x => {},		//스위치열
		factorial : x => {} //팩토리열
};
algo.array = {
		bubble : x =>{},
		insert : x =>{},
		select : x =>{},
		ranking : x=>{}
};
algo.matrix = {
		fiveBy5 : x => {},
		sendGlass : x =>{},
		snail : x =>{},
		diamond : x =>{},
		zigxag : x =>{}
};
algo.math = {
		
};
algo.appl = {};

algo.router = {
	 onCreate : x=>{
		$.getScript(x+'/resources/js/router.js',
				()=>{
					alert('step 2'+x);
					$.extend(new Session(x));//은상추다의 추가없는데....
					algo.main.onCreate();
					}
				);
				//외부의 js파일 호출 import의 의미 
	}
	/*return {onCreate:onCreate};*/
}; 