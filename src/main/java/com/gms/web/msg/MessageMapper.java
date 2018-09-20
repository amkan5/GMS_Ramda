package com.gms.web.msg;

import org.springframework.stereotype.Repository;

import com.gms.web.msg.MessageVO;

@Repository
public interface MessageMapper {

  public void create(MessageVO vo) throws Exception;

  public MessageVO readMessage(Integer mid) throws Exception;

  public void updateState(Integer mid) throws Exception;

}
