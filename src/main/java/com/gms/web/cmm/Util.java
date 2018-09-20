package com.gms.web.cmm;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;

import com.gms.web.mbr.MemberDTO;

public class Util {
	public static Consumer<Integer> Logi = System.out::println;
	public static Consumer<String> Log = System.out::println;
	public static Function<String,Integer> convInt = Integer::parseInt;
/*	public static Predicate<String> p = s -> s.equals("");
	public static Predicate<String> notP = p.negate();*/
	public static Predicate<String> chk = s -> s.equals("");
	public static Predicate<String> nchk = chk.negate();
	//public static Function<HttpServletRequest,String> ctx = s-> s.getContextPath();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
	
}
