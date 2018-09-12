package com.gms.web.mbr;


import java.util.function.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;




@Controller 
@RequestMapping("/member")
public class MemberController {
	/*static final Logger logger = LoggerFactory.getLogger(HomeController.class);*/
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@Autowired MemberDTO memberDTO;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
		System.out.println("add 진입");
		System.out.println("name is "+member.getName());
		memberService.add(member);
		return "public:member/login.tiles";
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
	public String login(@ModelAttribute MemberDTO member,
			Model model) {
		/*@PathVariable String userid,
		@PathVariable String password*/
		System.out.println("로긴들어옴");
		Predicate<String> p = s -> s.equals("");
		System.out.println("++++++predicate p");
		Predicate<String> notP = p.negate();
		System.out.println("++++++predicate notP");
		String path = "public:member/login.tiles";
		System.out.println("member "+mbrMapper.exist(member.getUserid()));
		if(notP.test(mbrMapper.exist(member.getUserid()))) {
			System.out.println("++++++TEST안으로들어옴");
			Function<MemberDTO,MemberDTO> f = (t)->{ //<파라미터,리턴값>
				return mbrMapper.login(t);
			};
			System.out.println("++++++이프문끝");
			path = (f.apply(member)!=null)?
					"auth:member/retrieve.tiles"
					:
					"public:member/login.tiles";
		}
			System.out.println("path끝");
		/*Predicate<String> ls = s -> s.equals("auth:member/retrieve.tiles");
		if(ls.test(path)) {
			memberDTO = mbrMapper.selectOne(member.getUserid());
		}*/
		memberDTO = (Predicate.isEqual("public:member/login.tiles").test(path))?
				mbrMapper.selectOne(member.getUserid()):
					new MemberDTO();
		System.out.println("db끝");	
		System.out.println(memberDTO.getUserid());
		//syso -> member 정보
		/*System.out.println(">>>>>>"+member.getUserid());
		String r = mbrMapper.exist(member.getUserid());
		System.out.println("++++++"+r);
		boolean b = p.test(r);
		System.out.println("::::::"+b);
		System.out.println("param id >>"+member.getUserid());
		System.out.println("param pw >> "+member.getPassword());
		MemberDTO s2 = f.apply(member);
		System.out.println("ssss:: " + s2);*/
		/*String path = "public:member/login.tiles";
		if(memberService.login(member)) {
			model.addAttribute("member", 
					memberService.retrieve(member.getUserid()));
			path = "auth:member/retrieve.tiles";
			System.out.println("로그인 성공");
		}*/
		return path;
	}
	@RequestMapping("/logout")
	public String logout() {
		//걍 로그아웃되게끔하자 ㅎㅎㅎ
		return "home:common/content.tiles";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
