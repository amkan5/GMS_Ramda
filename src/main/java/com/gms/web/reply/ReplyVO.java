package com.gms.web.reply;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.msg.MessageVO;

import lombok.Data;

@Component
@Data @Lazy
public class ReplyVO {

  private Integer rno;
  private Integer bno;
  private String replytext;
  private String replyer;

  private Date regdate;
  private Date updatedate;
  @Override
  public String toString() {
    return "ReplyVO [rno=" + rno + ", bno=" + bno + ", replytext=" + replytext + ", replyer=" + replyer + ", regdate="
        + regdate + ", updatedate=" + updatedate + "]";
  }
}
