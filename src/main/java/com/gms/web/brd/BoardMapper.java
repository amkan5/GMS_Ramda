package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public interface BoardMapper{
	public void insert(ArticleDTO p);
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSome(Map<?,?> p);
	public ArticleDTO selectOne(String p);
	public int count(Map<?,?> p) ;
	public void update(Map<?,?> p) ;
	public void delete(Map<?,?> p) ;
	public int countPaging();
	public ArticleDTO listCreterio();
	public ArticleDTO listPage();
	public List<ArticleDTO> listSearch();
}
