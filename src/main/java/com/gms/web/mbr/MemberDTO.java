package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class MemberDTO {
	protected String userid,
	name,
	roll,
	teamid,
	age,
	password,
	ssn,
	gender,
	subject;

}
