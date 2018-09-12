package com.gms.web.brd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.mbr.MemberDTO;



@Controller
@RequestMapping("/board")
public class BoardController {
	@RequestMapping("/add")
	public String add() {
		return "public:member/login.tiles";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public String retrieve() {
		//System.out.println("name is "+member.getName());
		//업데이트로 갈지 딜리트로갈지 
		return "auth:member/modify.tiles";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public String modify(@ModelAttribute("member") MemberDTO member,
			Model model) {
		//System.out.println("name is "+member.getName());
		return "auth:member/modify.tiles";
	}
	@RequestMapping("/remove")
	public String remove() {
		String path = "";
		return path;
	}
	@RequestMapping("/login")
	public String login() {
		/*@PathVariable String userid,
		@PathVariable String password*/
/*		String path = "";
		if(memberService.login(member)) {
			model.addAttribute("member", 
					memberService.retrieve(member.getUserid()));
			path = "auth:member/retrieve.tiles";
			System.out.println("로그인 성공");
		}else {
			System.out.println("로그인 실패");
			path = "public:member/login.tiles";
		}*/
		return "public:member/login.tiles";
	}
	@RequestMapping("/logout")
	public String logout() {
		//걍 로그아웃되게끔하자 ㅎㅎㅎ
		return "home:common/content.tiles";
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
