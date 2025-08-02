package vn.edu.likelion.ktc.demo_spring_framework;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import vn.edu.likelion.ktc.demo_spring_framework.annotation.AppConfiguration;
import vn.edu.likelion.ktc.demo_spring_framework.xml.Developer;

public class Application03 {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfiguration.class);
        Developer mbDev = (Developer) context.getBean("mobile");
        System.out.println(mbDev);
        Developer fsDev = (Developer) context.getBean("fullstack");
        System.out.println(fsDev);
    }
}
