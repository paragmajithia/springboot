package com.parag.spring.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("hello")
    public String greet(@RequestParam(name = "myName", required = false, defaultValue = "unknown user")
                                    String myName) {
        return String.format("Hello %s", myName);
    }

}
