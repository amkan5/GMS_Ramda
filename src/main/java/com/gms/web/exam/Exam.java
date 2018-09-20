package com.gms.web.exam;

import org.springframework.stereotype.Component;
import com.gms.web.mbr.MemberDTO;

import lombok.Data;

@Component
@Data
public class Exam {
	protected String sbjSeq, exmSeq, term, score, userid;
}
