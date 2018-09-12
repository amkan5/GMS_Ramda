package com.gms.web.cmm;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;

public class Util {
	public static Consumer<Integer> Logi = System.out::println;
	public static Consumer<String> Log = System.out::println;
	Function<String,Integer> convInt = Integer::parseInt;
	//Predicate<String> p = s -> s.equals("");
	//Predicate<String> notP = p.negate();
	public static Predicate<String> chk = s -> s.equals("");
	public static Predicate<String> nchk = chk.negate();
	//public static Function<HttpServletRequest,String> ctx = s-> s.getContextPath();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
}
