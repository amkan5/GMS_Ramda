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
		let $t__l = $('#t__l'); // let옆에 $는 dom객체이름 앞에.  다시 호출하지않아
		let $t__r = $('#t__r'); 
		$("<ul />")
		.attr({id : 'side__menu'})
		.addClass('list-group').appendTo($t__l);
		$('<li/>')
		.attr({id : 'arith'})
		.addClass('list-group-item')
		.appendTo($('#side__menu'));
		let anchor = $.fn.anchor({txt:'등차수열의합'});
		anchor.appendTo($('#arith'))
		.click(e=>{
			$t__r.empty();
			/*let ques = '<div id="ques"><h3>'
					+'		시작값 x, 마지막값 y, 공차 d인 수열의 합을 구하시오.'
					+'	</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value=""/></br>'
					+'	<label for="마지막값">마지막값</label><input id="end" type="text" value=""/></br>'
					+'	<label for="공차">공차</label><input id="dif" type="text" value=""/></br>'
					+'	<button id="bt">결과보기</button>'
					+'	<h6 id="rs"></h6></div>';*/
			
			/*for(){
				
			}*/
			$('<div/>') //div란 태그를 하나 만들어라
			.attr({id:'ques'}) //ques라는 아이디가 하나 만들어짐 ㅎ 
			.appendTo($t__r);
			$('<h6/>').remove();
			$('<h4>')
			.html('시작값 x, 마지막값 y, 공차 d인 수열의 합을 구하시오.').appendTo($('#ques'));
			let arr = [{name:'시작값',id:'sta'},
						{name:'마지막값',id:'end'},
						{name:'공차', id:'dif'}];
			let arr2 = {시작값:'sta',마지막값:'end',공차:'dif'};
			/* 구방법
			 * for(let i in arr){
				$('<label>').html(arr[i].name).appendTo($('#ques'));
				$('<input>').attr({id:arr[i].id, type:'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
			};*방법1 but arrow를 하면 안먹힘 => 
			$.each(arr,function(i){
			$('<label>').html(this.name).appendTo($('#ques'));
			$('<input>').attr({id:this.id, type:'text'}).appendTo($('#ques'));
			$('<br/>').appendTo($('#ques'));
		};*/
		/*	$.each(arr2, (i,val)=>{
				 $('<label>').html(i).appendTo($('#ques'));
					$('<input>').attr({id:val, type:'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
			 });*/
		//jason방법 arr1돌리는거
			$.each(arr, (i,j)=>{
				 $('<label>').html(j.name).appendTo($('#ques'));
				 //$.fn.label('시작값','ques'); 여기서 라벨이 컴포넌트임 input,이런거
					$('<input>').attr({id:j.id, type:'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
			 });
			
			/*$('<'+'label'+'>').html('시작값').appendTo($('#ques'));
			$('<'+'input'+'>').attr({id:'sta',type:'text'}).appendTo($('#ques'));
			$('<br/>').appendTo($('#ques'));
			
			$('<label>').html('마지막값').appendTo($('#ques'));
			$('<input>').attr({id:'end',type:'text'}).appendTo($('#ques'));
			$('<br/>').appendTo($('#ques'));
			
			$('<label>').html('공차').appendTo($('#ques'));
			$('<input>').attr({id:'diff',type:'text'}).appendTo($('#ques'));
			$('<br/>').appendTo($('#ques'));*/
			$('<h6/>').remove();
			$('#t__r').html(ques);
			$('<buttion/>').addClass('btn btn-primary')
			.attr({type:'button'})
			.html('결과보기')
			.appendTo($('#ques'))
			.click(e=>{
				$('<h6/>').remove();
				let sta = $('#sta').val()*1; //*1을하면 int로바뀜 
				let end =  $('#end').val()*1;
				let dif =  $('#dif').val()*1;
				let i = sta; //항
				let sum = 0;
				/*$('<h6/>').attr({id:'h6'}).empty().text(
						
						).appendTo($('#ques'));*/
				console.log('i : '+i);
				$('<h6/>').attr({id:'h6'}).empty().text(($.fn.nullChecker( 
						[ $('#sta').val(),
							$('#end').val(),
							 $('#dif').val()]))?
							 ''
				    	     :'완성하세요'
						).appendTo($('#ques'));
				if($('#h6').text() === ''){
					while(i<=end){ //1+2+3+4+... 1+3+5+7+... 
						sum += i;
						i+= dif; 
						console.log(i+'번째 sum : '+sum);
					}
					/*alert('i: '+i,);*/
					$('#h6').text(sum).appendTo($('#ques'));
				}
				});
			});
		$('<li/>')
		.attr({id : 'siwt'})
		.addClass('list-group-item')
		.appendTo($('#side__menu'));
		$('<a/>')
		.attr({href : '#'})
		.html('스위치수열의 합')
		.appendTo($('#arith'))
		.click(e=>{
			$t__r.empty();
			$('<div/>') //div란 태그를 하나 만들어라
			.attr({id:'ques'}) //ques라는 아이디가 하나 만들어짐 ㅎ 
			.appendTo($t__r);
			$('<h6/>').remove();
			$('<h4>')
			.html('시작값 x, 마지막값 y, 공차 d인 수열의 합을 구하시오.').appendTo($('#ques'));
			let arr = [{name:'시작값',id:'sta'},
						{name:'마지막값',id:'end'},
						{name:'공차', id:'dif'}];
			$.each(arr, (i,j)=>{
				 $('<label>').html(j.name).appendTo($('#ques'));
				 //$.fn.label('시작값','ques'); 여기서 라벨이 컴포넌트임 input,이런거
					$('<input>').attr({id:j.id, type:'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
			 });
			 $('<h6/>').remove();
             $('#t__r').html(ques);
             $('<buttion/>').addClass('btn btn-primary')
             .attr({type:'button'})
             .html('결과보기')
             .appendTo($('#ques'))
             .click(e=>{
                  $('<h6/>').remove();
                  let sta = $('#sta').val()*1; //*1을하면 int로바뀜
                  let end =  $('#end').val()*1;
                  let dif =  $('#dif').val()*1;
                  let i = sta; //항
                  let sum = 0;
                  $('<h6/>').attr({id:'h6'}).empty().text(($.fn.nullChecker(
                             [ $('#sta').val(),
                                  $('#end').val(),
                                   $('#dif').val()]))?
                                   ''
                            :'완성하세요'
                             ).appendTo($('#ques'));
                  if($('#h6').text() === ''){
                        while(i<=end){ //1+2+3+4+... 1+3+5+7+...
                        	sum += i*swi;
    						i+= dif;
    						swi *= -1;
                        }
                        /*alert('i: '+i,);*/
                       $('#h6').text(sum).appendTo($('#ques'));
                  }
                  });
		});
		/*	$('#t__l').html('<a id="arith"><h3>등차수열</h3></a>');  함수를 계속 반복하고있음
			$('#t__l').append('<a id="fibonacci"><h3>피보나치열</h3></a>');
			$('#t__l').append('<a id="swit"><h3>스위치열</h3></a>');
			$('#t__l').append('<a id="factorial"><h3>팩토리열</h3></a>');
			$('#arith').click(e=>{
				let ques ='	<h3>'
					+'		시작값 x, 마지막값 y, 공차 d인 수열의 합을 구하시오.'
					+'	</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value=""/></br>'
					+'	<label for="마지막값">마지막값</label><input id="end" type="text" value=""/></br>'
					+'	<label for="공차">공차</label><input id="dif" type="text" value=""/></br>'
					+'	<button id="bt">결과보기</button>'
					+'	<h6 id="rs"></h6>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					//algo.util.d
					let arr = [
							$('#sta').val(),
							 $('#end').val(),
							 $('#dif').val()
						];
					let sta = $('#sta').val()*1; //*1을하면 int로바뀜 
					let end =  $('#end').val()*1;
					let dif =  $('#dif').val()*1;
					console.log(sta+','+end+','+dif);
					let i = sta; //항
					let sum = 0;
					let rs = ($.fn.nullChecker(
							[ $('#sta').val(),
								$('#end').val(),
								 $('#dif').val()]))?
						'완성하세요':
						'빈칸을 채우세요'
							;
					$('#rs').empty().text(rs);
					console.log('들어왔다')
					while(i<=end){ //1+2+3+4+... 1+3+5+7+... 
						sum += i;
						i+= dif;
					}
					$('#t__r').append('</br>'+sum);
				})
			});
			$('#swit').click(e=>{
				//1-2+3-4+5-6
				let ques ='	<h3>'
					+'		시작값 x, 마지막값 y, 공차 d인 수열의 스위치 합을 구하시오.'
					+'	</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value=""/></br>'
					+'	<label for="마지막값">마지막값</label><input id="end" type="text" value=""/></br>'
					+'	<label for="공차">공차</label><input id="dif" type="text" value=""/></br>'
					+'	<button id="bt">결과보기</button>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					let sta = $('#sta').val()*1; 
					let end =  $('#end').val()*1;
					let dif =  $('#dif').val()*1;
					let i = sta; 
					let sum = 0;
					let k = 0;
					let swi = 1;
					while(i<=end){
						sum += i*swi;
						i+= dif;
						swi *= -1;
					}
					$('#t__r').append('</br>'+sum);
				})
				
			});
			$('#fibonacci').click(e=>{
				//'1+1+2+3+5+8+13+ 20번째항까지';
				let ques ='	<h3>'
					+'		시작값 x, 마지막항 y인 피보나치 수열의 합을 구하시오.'
					+'	</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value=""/></br>'
					+'	<label for="마지막값">마지막항</label><input id="end" type="text" value=""/></br>'
					+'	<button id="bt">결과보기</button>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					let sta = $('#sta').val()*1; 
					let end =  $('#end').val()*1;
					let i = 3; 
					let sum = 2;
					let a = sta;
					let b = sta;
					let c = 0;
					while(i<=end){
						c = a+b; // 세번째행 저장
						sum += c;
						a = b; //첫번째항
						b = c; //두번째항
						i++; //항계산중
						console.log(sum);
					}
					$('#t__r').append('</br>'+sum);
				})
				
				
			});
			
			$('#factorial').click(e=>{
				alert('팩토리 선택')
				
			});*/
			
		
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
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패')});
					algo.main.onCreate();
				}
				);
				//외부의 js파일 호출 import의 의미 
	}
	/*return {onCreate:onCreate};*/
}; 
/*algo.util = {
		 onCreate : x=>{
				$.getScript(x+'/resources/js/util.js',
						()=>{
							//직접코딩
							$.extend(nullChecker);
							console.log("잘돌아감");
							
							}
						);
		 }
};*/


