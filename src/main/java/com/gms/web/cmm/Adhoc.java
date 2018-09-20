package com.gms.web.cmm;



import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.MemberDTO;
@Component
public class Adhoc {
	public Function<MemberDTO,MemberDTO> ageAndGender = (MemberDTO mbr)->{
	 if((Integer.parseInt(mbr.getSsn().substring(7,8))%2)==0) {
		 mbr.setGender("여자");
		}else{
			mbr.setGender("남자");
		};
		mbr.setAge(String.valueOf(119-Integer.parseInt(mbr.getSsn().substring(0, 2))));
		//memberDAO.insert(mbr);
		return mbr;
	};
}
