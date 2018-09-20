package com.gms.web.msg;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.gms.web.msg.MessageVO;

import lombok.Data;

import com.gms.web.cmm.PointDAO;
import com.gms.web.msg.MessageMapper;

@Service
public class MessageServiceImpl implements MessageService {

  @Inject
  private MessageMapper messageDAO;

  @Inject
  private PointDAO pointDAO;


  //@Transactional
  @Override
  public void addMessage(MessageVO vo) throws Exception {

    messageDAO.create(vo);
    pointDAO.updatePoint(vo.getSender(), 10);
  }

  @Override
  public MessageVO readMessage(String uid, Integer mid) throws Exception {

    messageDAO.updateState(mid);

    pointDAO.updatePoint(uid, 5);

    return messageDAO.readMessage(mid);
  }
}