package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service //스프링에서 꺼내와야함 
public class BoardServiceImpl implements BoardService{
	@Autowired BoardMapper BoardDAO;
	@Override
	public void insert(ArticleDTO p) {
		
	}

	@Override
	public List<?> selectList(Map<?, ?> p) {
		return null;
	}

	@Override
	public List<?> selectSome(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDTO selectOne(String p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void update(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ArticleDTO login(ArticleDTO p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countPaging() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public ArticleDTO listCreterio() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDTO listPage() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDTO> listSearch() {
		// TODO Auto-generated method stub
		return null;
	}

}
