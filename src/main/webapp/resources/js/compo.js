"use strict"
/*var ui={ //전역을 쓰겠다는 의미
	anchor : x=>{return $('<a/>').attr({href : '#'}).html(x.txt);},
	ul : x=>{
		let ul = $('<ul>');
		$.each(x,(i,j)=>{ // x= json : array
			$('<li/>').appendTo(ul);
		});
		ul
		.attr({id : x.id})
		.addClass('list-group');
	return ul;
	} //ul다른곳
}
*/
var ui={
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{return $('<a/>').attr({href:'#',id:x.id}).html(x.txt);}, //ui.anchor({txt:'',id:''});
	ul : x=>{   
		let ul = $('<ul/>');
		for(let i=0;i<x.len;i++){
			$('<li/>').attr({id:x.id+'-'+i}).appendTo(ul);
		}
		ul.attr({id:x.id}).addClass('list-group-item');
		return ul;
	},
	input : x=>{
		let res = ui.div({}).addClass('input-group mb-3');
		res.append(
				ui.div({}).addClass('input-group prepend')
				.append(
						$('<span/>').attr({id:x.spanId}).html(x.spantxt).addClass('input-group-text')))
		.append($('<input/>').attr({
			id:x.id,
			type:x.type,
			placeholder : x.placeholder,
			aria_label : x.aria_label,
			aria_describedby : x.basic_addon1
			}).addClass('form-control'));
		/*return $('<div/>')
		.addClass('input-group mb-3')
		.append($('<div/>'))
		<div class="input-group mb-3">
		  <div class="input-group-prepend">
		    <span class="input-group-text" id="basic-addon1">@</span>
		  </div>
		  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
		</div>*/
		return res;
	},
	label : x=>{
		return $('<label/>').attr({'for' : x.id})
				.text(x.txt) 
	},

	btn : x=>{
		//<button type="button" class ="btn btn-primary">Pirmary</button>
		return $('<button>').attr('type','button')
		.addClass('btn btn-'+x.clazz)
		.html(x.txt); //급하면 string으로 던지고 
	}
}