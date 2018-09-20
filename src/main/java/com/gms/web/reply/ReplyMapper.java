package com.gms.web.reply;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.cmm.Criteria;
import com.gms.web.reply.ReplyVO;

@Repository
public interface ReplyMapper {

  public List<ReplyVO> list(Integer bno) throws Exception;

  public void create(ReplyVO vo) throws Exception;

  public void update(ReplyVO vo) throws Exception;

  public void delete(Integer rno) throws Exception;

  public List<ReplyVO> listPage(Integer bno, Criteria cri) throws Exception;

  public int count(Integer bno) throws Exception;

  public int getBno(Integer rno) throws Exception;

}
