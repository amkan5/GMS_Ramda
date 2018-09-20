"use strict"; //엄격한 문법을 적어 틀리면 에러처리하라는 명령 
var app = app || {}; //app이 있으면 app을할당 아니면 {}; 
app =(()=>{
	var init =x=>{
		console.log('step 1');
		app.router.init(x);
	};
	return {
		init : init
	};
})();

app.main=(()=>{
	var header,footer,content,nav,ctx,script,style,img,w;
    var init =()=>{
    	ctx = $.ctx();
    	script = $.script();
    	style = $.style();
    	img = $.img();
    	w = $('#wrapper');
    	header = script+'/header.js';
    	console.log('header: '+header);
    	content = script+'/content.js';
    	nav = script+'/nav.js';
    	footer = script+'/footer.js';
    	onCreate();
    	};
    var onCreate =()=>{
    	setContentView();
    };
    var setContentView =()=>{
    	console.log('step2');
    	app.router.home();
    };
    return{ init: init };
})();
app.permission = (()=>{
	var login =x=>{
		$('#banner').remove();
		$('#common_content').empty();
		$.getScript($.script()+'/compo.js',()=>{
		 $.getScript($.script()+'/login.js',()=>{
			 $('#common_content').html(loginUI()); //jxhr
		 }).done(x=>{
			 //$('nav').css({'background-color':'yellow'});
			 ui.anchor({txt:'로그인',id:'log_submit'})
			 .attr({type : 'button'})
			 .css({'width' : '300px',
				 'background-color':'yellow'})	
			 .addClass("btn btn-primary")
				.appendTo($('#login_box'));
			 $('#log_submit').click(()=>{ //event걸려있는애들은 먼저 생성되면안됨. event걸어줄떄 생성되면서 해야함
					alert($('#userid').val());
					$.ajax({
						 url : $.ctx()+'/member/login',
						 method : 'post',
						 contentType : 'application/json',
							 data : JSON.stringify({userid : $('#userid').val(),
								 					password : $('#password').val()}),
							success : d=>{
								alert('SUCCESS !!');
								if(d.msg==="CORRECT"){
									app.router.loghome();
									//버튼속성
									//app.router.home();
									
								}else{
									alert(d.msg);
								}
							},
							error : (m1,m2,m3)=>{
								alert('에러발생1'+m1);
								alert('에러발생2'+m2);
								alert('에러발생3'+m3)
							}
					 });
				 });
		 }) 
		})
			};
		var join =()=>{
				$('#banner').remove();
				$('#common_content').empty();
				$.getScript($.script()+'/compo.js',()=>{
				 $.getScript($.script()+'/add.js',()=>{
					 $('#common_content').html(addUI()); 
					/* $("[name='subject]")
					 .change(function(){ //이벤트줄때좋음 ㅎ 
						 alert($(this).val());
					 });*/
					
					 ui.anchor({txt:'JOIN',id:'add_submit'})
					 .attr({type : 'button'})
					 .css({'width' : '300px',
						 'background-color':'yellow'})	
					 .addClass("btn btn-primary")
						.appendTo($('#contentBox'));
					 $('#add_submit').click(()=>{
						 var arr = [];
						 var res = '';
						 //let subject =  $("input[name='subject']:checked").val();
						 var sub = $("input[name='subject']");
						 let i;
						 for (i of sub){
							 if(i.checked){
								 alert('선택된과목 : '+i.value);
								 arr.push(i.value);
								 res += i.value+',';
							 }
						 };
						 let roll = $("select").val();
						 let teamid =  $("input[name='teamid']:checked").val();
						alert("subject: "+arr);
						 alert("roll: "+roll);
						 alert("teamid: "+teamid);
						 	$.ajax({
								 url : $.ctx()+'/member/add',
								 method : 'post',
								 contentType : 'application/json',
									 data : JSON.stringify({
										 userid : $('#userid').val(),
										 name : $('#name').val(),
							 			 password : $('#password').val(),
										 roll : roll,
										 teamid : teamid,
										 //subject : JSON.stringify(arr) //arr도 먹힌다 이렇게하면 
										 subject : res
									 }),
									success : d=>{
									},
									error : (m1,m2,m3)=>{
										alert('에러발생3'+m3);
									}
							 });
					 })
					 })
				})
			};
	return {login : login, join: join};
})();

/*app.add = (()=>{
	var join =()=>{
		$('#banner').remove();
		$('#common_content').empty();
		 $.getScript($.script()+'/add.js',()=>{
			 $('#common_content').html(addUI()); 
		 }).done(x=>{
			 $('#add_submit').click(()=>{
				 alert('클릭');
			 })
		 });
	};
	return {join : join};
})();
*/
app.board = (()=>{
	var header,footer,content,nav,ctx,script,style,img,w;
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		alert('Board');
		$('#banner').empty();
		$('#common_content').empty();
	};
	return {init : init};
})();

	app.router = {
		 init : x=>{
			$.getScript(x+'/resources/js/router.js',
					()=>{
						alert('step 2'+x);
						$.extend(new Session(x));//은상추다의 추가없는데....
						$.getScript($.ctx()+'/resources/js/util.js')
						.done(x=>{
							app.main.init();
							})
						.fail(x=>{console.log('실패')})
					}
					);
					//외부의 js파일 호출 import의 의미 
		},
		home : ()=>{
			$.when(	
	    			$.getScript($.script()+'/nav.js'),
		            $.getScript($.script()+'/header.js'),
		            $.getScript($.script()+'/content.js'),
		            $.getScript($.script()+'/footer.js'),
		            $.Deferred(y=>{
		            	$(y.resolve);
		            	console.log('step3'+y); //스파게티소스
		            })
		        ).done(z=>{
		        	$('#wrapper').html(navUI()+
		        			headerUI()+
		        			contentUI($.ctx())+
		        			footerUI());
		        	$('#login_btn').click(e=>{
		        		e.preventDefault();
		        		alert('로그인1');
		        		app.permission.login();
		        	});
		        	$('#join_btn').click(e=>{
		        		app.permission.join();
		        	});
		        	$('#board').click(e=>{
		        		e.preventDefault();
		        		app.board.init();
		        	});
		        	/*$('#logout_btn').click(e=>{
		        		alert("먹힐까?");
		        	});*/
		        	/*$.getScript(header,()=>{
		        		w.html(headerUI());
		        	});*/
		        	//로그아웃시 app.main.init();
		        	console.log('step4');
		        }).fail(
		        		console.log('실패'));
		},
		loghome : ()=>{
			console.log('log home step1');	
			$('#common_content').empty();
	/*		 $.getScript($.script()+'/compo.js',()=>{
				 $('#banner').html(headerUI()); 
			 });*/
			
			
			 $.getScript($.script()+'/content.js',()=>{
				 $('#common_content').html(contentUI()); 
			 })
			 $.getScript('',()=>{}); //=옵저버 패턴 대기상태로있다가 js파일이 리딩되었을때 
			 
			 		$('#navibar').empty().html("");
			 
			 		$('#login_btn').removeAttr('id').html("LOGOUT").attr({id:"logout_btn"});
		        	//$('#login_btn').html("LOGOUT").attr({id:"logout_btn"});
					$('#join_btn').html("SEARCH").attr({id:"search_btn"});
					$('#admin_btn').html("MYPAGE").attr({id:"mypage_btn"});
					$('#logout_btn').click(e=>{
						alert("먹힐까?");
    	});   
		}
	};
/*app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x); //경로를 먼저 저장 : 안드로이드+노드
			app.onCreate(x);
		},
		onCreate : ()=>{
			app.setContentView();
			//selector 떄문에 있으면 있고 없으면 없는거야 z
			$('#login_btn').click(()=>{
				location.href = app.x()+"/move/public/member/login";
			});
			$('#join_btn').click(()=>{
				location.href = app.x()+"/move/public/member/add";
			});
			
		   $('#add_submit').click(function(){ //얘는 달러 쓰는순간 dom객체 html
				alert(app.x()+"/member/add");
				var form = document.getElementById('addForm');
		    	form.action = app.x()+"/member/add";
				form.method = "post";
				form.submit(); 
			});
			//j query방법 
			$('#add_submit').click(function(){ 
				alert(app.x()+"/member/add");
				$('#addForm').attr({
				action:app.x()+"/member/add",
				method: "POST"
				}).submit();
			});
			$('#log_submit').click(()=>{
				$('#loginForm').attr(
						{
					action:app.x()+"/member/login",
					method: "POST"
					}
						).submit();
				//$('#github').attr("href", "https://www.naver.com");
				
				//location.href = app.x()+"/member/login";
			});
			$('#logout_btn').click(()=>{
				//id주고 value 
			
				//로그아웃 어케줌?? app.session.member("");
				location.href = app.x()+"/move/home/common/content";
			});
			$('#mypage_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/retrieve";
			});
			$('#remove_btn').click(()=>{
				location.href = app.x()+"/move/home/common/content";
			});
			$('#home_btn').click(()=>{
				location.href = app.x()+"/move/home/common/content";
			});
			$('#moveToUpdate').click(()=>{
				$('#updateForm').attr(
				);
				$('#retriveForm').attr({
					action: app.x()+"/member/retrieve",
					method: "POST"	
					}).submit();	
				$('#updateForm').attr({
						'userid': app.m().userid,
						'name': app.m().name});
				location.href = app.x()+"/move/auth/member/modify";
			});
			$('#moveToDelete').click(()=>{
				location.href = app.x()+"/move/auth/member/remove";
			});
			$('#modify_submit').click(()=>{
				$('#updateForm').attr({
					action: app.x()+"/member/modify",
					method: "POST"	
					}).submit();
			});
			
		},
		setContentView : ()=>{
			console.log('step 4 '+app.session.path('js'));
			//화면
		}
		
};

app.session = { //init에 접근가능 
		context : x=>{
			console.log('step 2'+x);
			
		},
		path : x=>{
			
		},
		setmember : x=>{
			if(x.userid!=""){
			$.each(x, function(k,v){
				sessionStorage.setItem(k,v);
			});
			}
			sessionStorage.setItem('userid', x.userid);
			sessionStorage.setItem('password', x.password);
			sessionStorage.setItem('name', x.name);
			sessionStorage.setItem('teamid', x.teamid);
			sessionStorage.setItem('age', x.age);
			sessionStorage.setItem('gender', x.gender);
			sessionStorage.setItem('subject', x.subject);
		},
		getmember : ()=>{
			//return sessionSotrage.getItem(x);
			return {"userid":sessionStorage.getItem('userid'),
				"password":sessionStorage.getItem('password'),
				"name":sessionStorage.getItem('name'),
				"teamid":sessionStorage.getItem('teamid'),
				"age":sessionStorage.getItem('age'),
				"gender":sessionStorage.getItem('gender'),
				"subject":sessionStorage.getItem('subject')};
		}
};*/


