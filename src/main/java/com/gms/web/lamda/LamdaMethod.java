package com.gms.web.lamda;

import java.util.function.*;

public class LamdaMethod {
	public static void main(String[] args) {
		// Function<String,Integer> f = s->Integer.parseInt(s);
		Function<String,Integer> f = Integer::parseInt;
		int a = f.apply("1");
		System.out.println(a);
		//Consumer<String> c = s -> System.out.println(s);
		Consumer<String> c = System.out::println;
		c.accept("Hello Lamda !! ");
		
	}
}
