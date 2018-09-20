package com.gms.web.brd;

import java.util.Arrays;
import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.msg.MessageVO;

import lombok.Data;

@Component
@Data @Lazy
public class BoardVO {
	private Integer bno;
	private String title;
	private String content;
	private String writer;
	private Date regdate;
	private int viewcnt;
	private int replycnt;
	private String[] files;
	
	@Override
	public String toString() {
		return "BoardVO [bno=" + bno + ", title=" + title + ", content="
				+ content + ", writer=" + writer + ", regdate=" + regdate
				+ ", viewcnt=" + viewcnt + ", replycnt=" + replycnt
				+ ", files=" + Arrays.toString(files) + "]";
	}

}
