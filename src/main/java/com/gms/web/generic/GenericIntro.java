package com.gms.web.generic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 
 * Generic 타입을 창조 
 * class Member() -> static Member로 타입을 생성
 * List<Member>
 * Dynamic 
 * 굳이 set을 할 필요가없다. 보여주기만하면된다. 
 * 타입의 안정성을 제공, 형변환 생략, 
 */
public class GenericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("=================1===============");
		Item<String> itName = new Item<>();
		itName.setOne("aaa");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(5);
		System.out.println("삼성 신상 이름은 : \n"+
						itName.getOne()+itVers.getOne());
		System.out.println("=================2===============");
		Item<List<String>> it = new Item<>();
		it.setSome(
				Arrays.asList(new String[] {"Hello","world","Generic"})
				);
		System.out.println(it.getSome());
		System.out.println("=================3===============");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Fruit> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}
}
