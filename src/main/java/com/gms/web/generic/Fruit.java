package com.gms.web.generic;

public class Fruit {public String toString() {return "Fruit";}}
class Apple extends Fruit{public String toString() {return "Apple";}}
class Grape extends Fruit{public String toString() {return "Grape";}}
class Juice{
	String a;
	String name;
	Juice(String name){this.name = name + "";}
	public String toString() {return name;}
}
class Mixer{
	static Juice makeJuice(FruitBox<? extends Fruit> box){
		String t = "";
		for(Fruit f : box.getList())
			t += f + " ";
		return new Juice(t);}
}
class FruitBox<T extends Fruit> extends Box<T>{}
