package com.gms.web.generic;

import java.util.function.*;

/*
 Consumer<T> void accept(T t) -> C,U,D
 Function<T,R> R apply(T t)	  -> R
 Predicate<T> boolean test(T t)  -> Login
 Supplier<T> T get()			 -> Count
 UnaryOperator<T> static <T> UnaryOperator<T> identity()	-> 
 * **/
public class OraleLamda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(x)) ? "NULL" : "NOT NULL";
		System.out.println(r);
	}
}
