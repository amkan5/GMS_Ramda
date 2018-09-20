package com.gms.web.msg;

import com.gms.web.msg.MessageVO;

public interface MessageService {

  public void addMessage(MessageVO vo) throws Exception;

  public MessageVO readMessage(String uid, Integer mno) throws Exception;
}
