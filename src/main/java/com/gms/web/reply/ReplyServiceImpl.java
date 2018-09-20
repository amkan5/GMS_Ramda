package com.gms.web.reply;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.gms.web.cmm.Criteria;
import com.gms.web.reply.ReplyVO;
import com.gms.web.reply.*;
import com.gms.web.brd.*;
import com.gms.web.reply.ReplyMapper;

@Service
public class ReplyServiceImpl implements ReplyService {

  @Inject
  private ReplyMapper replyDAO;
  
  @Inject
  private BoardMapper boardDAO;

  @Transactional
  @Override
  public void addReply(ReplyVO vo) throws Exception {

    replyDAO.create(vo);
    boardDAO.updateReplyCnt(vo.getBno(), 1);
  }
  
  @Transactional
  @Override
  public void removeReply(Integer rno) throws Exception {

    int bno = replyDAO.getBno(rno);
    replyDAO.delete(rno);
    boardDAO.updateReplyCnt(bno, -1);
  }   



  @Override
  public List<ReplyVO> listReply(Integer bno) throws Exception {

    return replyDAO.list(bno);
  }

  @Override
  public void modifyReply(ReplyVO vo) throws Exception {

    replyDAO.update(vo);
  }



  @Override
  public List<ReplyVO> listReplyPage(Integer bno, Criteria cri) 
      throws Exception {

    return replyDAO.listPage(bno, cri);
  }

  @Override
  public int count(Integer bno) throws Exception {

    return replyDAO.count(bno);
  }

}
