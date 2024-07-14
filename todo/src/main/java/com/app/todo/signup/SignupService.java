package com.app.todo.signup;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.todo.Utils;
import com.app.todo.exceptions.UserAlreadyExistsException;
import com.app.todo.signup.entity.SignupEntity;
import com.app.todo.user.UserService;

@Service
public class SignupService {
    @Autowired
    private UserService userService;
    private SignupRepository signupRepository;
    private Utils utils;


    public SignupService(UserService userService, SignupRepository signupRepository, Utils utils) {
        this.userService = userService;
        this.signupRepository = signupRepository;
        this.utils = utils;
    }

    public String getVerifiedEmailUUID(String email) throws Exception {
        if(userService.doesExistsEmail(email))
            throw new UserAlreadyExistsException();
        return saveOTPInfo(email);
    }

    private String saveOTPInfo(String email) {
        String uuid = UUID.randomUUID().toString();
        String otp = utils.generateOTP();
        SignupEntity signupEntity = new SignupEntity(uuid, email, otp, false, false);
        signupRepository.save(signupEntity);

        return uuid;
    }
}
