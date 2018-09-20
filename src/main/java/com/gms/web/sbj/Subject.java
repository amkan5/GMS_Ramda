package com.gms.web.sbj;

import org.springframework.stereotype.Component;
import com.gms.web.mbr.MemberDTO;

import lombok.Data;

@Component
@Data
public class Subject {
	protected String sbjSeq, sbjName;
}
