package com.gms.web.algo;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/algo")
public class AlgoCtrl {
	//static final Logger logger = LoggerFactory.getLogger(Algo.class);
	 @GetMapping("/money/{money}")
	 public void money(@PathVariable String money) {
		 Util.Log.accept("넘어온 화폐값: "+money);
	 }
	 @PostMapping("/money/")
	 public @ResponseBody Map<String,Object> 
	 		money2(@RequestBody Map<String,Object>map) {
		 Map<String,Object> rmap = new HashMap<>(); //ajax는 실행을하면 db코딩함. 실행되서있음. 요청을하니까 반응을함. 이미있음. 
		 Util.Log.accept("넘어온 화폐값: "+map.get("money"));
		 rmap.put("test", "축하축하");
		 return rmap; //돌아갈곳 명시. 데이터값만 리턴함 경로신경안씀. request가 돌아갈곳 신경안씀. 
	 }
	
}
