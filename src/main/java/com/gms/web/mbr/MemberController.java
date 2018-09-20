package com.gms.web.mbr;


import java.util.HashMap;
import java.util.Map;
import java.util.function.*;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;




@RestController 
@RequestMapping("/member")
public class MemberController {
	/*static final Logger logger = LoggerFactory.getLogger(HomeController.class);*/
	@Autowired MemberMapper mbrMapper;
	@Autowired MemberDTO memberDTO;
	@PostMapping(value="/add")
	//public @ResponseBody Map<String,Object> login(@RequestBody MemberDTO pm) {
	public @ResponseBody  Map<String,Object> add(@RequestBody MemberDTO pm) {
		Map<String,Object> rmap = new HashMap<>();
		System.out.println("add 진입");
		System.out.println("넘어온 pm: "+pm);
		//memberService.add(member);
		return rmap;
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public String retrieve(@ModelAttribute("member") MemberDTO member,
			Model model) {
		System.out.println("name is "+member.getName());
		//업데이트로 갈지 딜리트로갈지 
		return "auth:member/modify.tiles";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public String modify(@ModelAttribute("member") MemberDTO member,
			Model model) {
		System.out.println("name is "+member.getName());
		return "auth:member/modify.tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute MemberDTO member,
			Model model) {
		String path = "";
		return path;
	}
	@PostMapping(value="/login")
	public @ResponseBody Map<String,Object> login(@RequestBody MemberDTO pm) {
		/*@PathVariable String userid,
		@PathVariable String password*/
		Map<String,Object> rmap = new HashMap<>();
		 Util.Log.accept("넘어온 로그인 정보 : "+pm.getUserid());
		System.out.println("member "+mbrMapper.count(pm));
		String msg = "";
		if(mbrMapper.count(pm)==0) {
			msg = "NOT EXIST";
		}else {
			System.out.println("ELSE들어옴");
			Function<MemberDTO,MemberDTO> f = (t)->{ //<파라미터,리턴값>
				return mbrMapper.get(t);
			};
			msg = (f.apply(pm)!=null)?
					"CORRECT"
					:
					"WRONG";
			memberDTO = f.apply(pm);
		}
		//rmap.put("ID EXIST", exist); //할려고하는 아이디가 없어 //너가넌 아이디는 맞는데 비번은 틀려
		System.out.println("메세지: "+msg);
		memberDTO = (Predicate.isEqual("CORRECT").test(msg))?
				mbrMapper.get(pm):
					new MemberDTO();
		rmap.put("msg", msg);
		rmap.put("member", memberDTO);
		System.out.println("db끝");	
		return rmap;
	}
	@RequestMapping("/logout")
	public String logout() {
		//걍 로그아웃되게끔하자 ㅎㅎㅎ
		return "home:common/content.tiles";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
