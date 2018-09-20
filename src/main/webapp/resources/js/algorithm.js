"use strict";
var algo = algo || {};
algo = { //class
        init : x=>{
             alert('step1 '+x);
             //algo.router.onCreate(x);
             algo.onCreate(x); //이파이할떄랑 다르게 algo.onCreate(x)하는 이유.
             algo.setContentView();
        },
        onCreate : x=>{
             //algo.setContentView();
             algo.router.onCreate(x);
                  },
        setContentView : ()=>{
             $('#wrapper').empty();     
        }
  }; 
 setContentView : ()=>{
		$('#wrapper').empty();
	};
algo.main = (()=>{
	var $wrapper,ctx,img,script,style,compo,json;
	var onCreate = ()=>{

		ctx = $.ctx();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script+'/compo.js';
		setContentView();
	};
	var setContentView = ()=>{
		//wrapper
		$('#wrapper').html('<h1>알고리즘</h1><span id="seq"><h3>  수 열   </h3></span>'
				+ '<span id="appl"><h3>  응 용   </h3></span>'
				+'<table id="tbl" style="width:800px;height:300px;'
				+'border-collapse: collapse;border:1px sollid black;margin:0 auto">'
				+ '<td id="t__l" style="width: 50%; border:1px solid black;"></td>'
				+'<td id="t__r" style="width: 50%; border:1px solid black;"></td>'
				+'</tr>'
				+'</table>'
				+'</div>');	
		let $t__l = $('#t__l'); // let옆에 $는 dom객체이름 앞에.  다시 호출하지않아
		let $t__r = $('#t__r'); 
		$('#seq').click(x=>{
		$t__l.empty();
		$("<ul />")
		.attr({id : 'side__menu'})
		.addClass('list-group').appendTo($t__l);
		$('<li/>')
		.attr({id : 'arith'})
		.addClass('list-group-item')
		.appendTo($('#side__menu'));
		$('<a/>')
		.attr({href : '#'})
		.html('등차수열의합').appendTo($('#arith'))
		.click(e=>{
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

			}); //이건있는거야 위에 
		});	
	$('<li/>')
	.attr({id : 'swit'})
	.addClass('list-group-item')
	.appendTo($('#side__menu'));
	$('<a/>')
	.attr({href : '#'})
	.html('스위치수열의 합')
	.appendTo($('#swit'))
	.click(e=>{
		$t__r.remove();
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
			      }); //ques click 닫는곳 
			}); //switch click 닫는곳 
		}); //seq click 닫는곳
	$('#appl').click(x=>{
		$t__l.empty();
		$t__r.empty();
		$.getScript(compo,()=>{
			ui.ul({len : 3,id:'menu'}).appendTo($t__l);
			ui.anchor({txt:'화폐문제'}).appendTo('#menu-0')
			.click(e=>{
				$t__r.empty();
				$('<h6>화폐문제</h6>').appendTo($t__r);
				ui.input({
					id : 'money',
					type : 'text',
					spantxt : '입금액',
					placeholder : '입금액'
				})
				/*.prepend(ui.label({
				id:'money-lab',
				txt:'입금액'
			}))*/
			.appendTo($t__r);
			ui.btn({clazz:'primary',txt:'전송'})
			.appendTo($t__r)
			.click(e=>{
				alert('화폐금액::'+$('#money').val());
				$.ajax({
					url : ctx+'/algo/money/',
					method : 'post',                                  
					contentType : 'application/json', //json을 던지겠다.
					data : JSON.stringify({money : $('#money').val()}), //여기까지 가기전
					success : d=>{ //여기서부터 다녀온후 d(데이터라는뜻) = rmap 키값맞춰줘서
						alert('Ajax 성공'+d.test);
					},
					error : (m1,m2,m3)=>{
						alert('에러발생 1'+m1);
						
						alert('에러발생 2'+m2);
						alert('에러발생 3'+m3);
					}
				}); //json밖에 못받게 막아버렸음. 음층난녀석. 속성값이 달라서 에러남. 
			});
			});
		});
		}); //appl click 
	} //return위에
	return {
		onCreate : onCreate,
		setContentView : setContentView
	};
})();


/*
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
algo.appl = {};*/

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


