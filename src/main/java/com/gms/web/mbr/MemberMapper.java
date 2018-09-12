package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper{
	public void insert(MemberDTO p);
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSome(Map<?,?> p);
	public MemberDTO selectOne(String p);
	public int count(Map<?,?> p) ;
	public void update(Map<?,?> p) ;
	public void delete(Map<?,?> p) ;
	public MemberDTO login(MemberDTO p) ;
	public String exist(String p);
}
