package com.gms.web.generic;

import java.util.Collections;
public class CarMain {
	public static void main(String[] args) {
		CarBox<BMW> bBox = new CarBox<>();
		CarBox<Avante> aBox = new CarBox<>();
		CarBox<Car> cBox = new CarBox<>();
		aBox.add(new Avante("아반떼a", 1500));
		aBox.add(new Avante("아반떼b", 2500));
		aBox.add(new Avante("아반떼c", 3500));
		bBox.add(new BMW("BMWa", 2000));
		bBox.add(new BMW("BMWb", 1000));
		bBox.add(new BMW("BMWc", 3000));
		cBox.add(new Avante("아반떼a", 1500));
		cBox.add(new Avante("아반떼b", 2500));
		cBox.add(new Avante("아반떼c", 3500));
		cBox.add(new BMW("BMWa", 2000));
		cBox.add(new BMW("BMWb", 1000));
		cBox.add(new BMW("BMWc", 3000));
		Collections.sort(aBox.getList(),new AvanteOrder());
		Collections.sort(bBox.getList(),new BMWOrder());
		Collections.sort(cBox.getList(),new CarOrder());
		System.out.println(aBox);
		System.out.println(bBox);
		System.out.println(cBox);
	} 
}
