package com.parag.spring.demo.controller;

import com.parag.spring.demo.model.User;
import com.parag.spring.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    /**
     * Get By ID using request param
     * @param id
     * @return
     */
    @GetMapping("{id}")
    public User getUserByIdPathVar(@PathVariable("id") Long id) {
        return this.getUserById(id);
    }

    @GetMapping("getById")
    public User getUserById(@RequestParam(name = "id", required = false, defaultValue = "unknown user")
                                    Long id) {
        Optional<User> userOpt = userRepo.findById(id);
        return userOpt.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User with %s not found", id)));

    }

    @PostMapping("create")
    public User createUser(@RequestBody User user) {
        User userCreated = userRepo.save(user);
        return userCreated;
    }
}
