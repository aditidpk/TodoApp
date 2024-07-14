package com.app.todo.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.app.todo.Utils;
import com.app.todo.exceptions.ErrorMessages;
import com.app.todo.signup.api.emailValidation.EmailRequest;
import com.app.todo.signup.api.emailValidation.EmailResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class SignupController {
    @Autowired
    private SignupService signupService;
    private Utils utils;

    public SignupController(SignupService signupService, Utils utils){
        this.signupService = signupService;
        this.utils = utils;
    }

    @PostMapping("/validate-email")
    public ResponseEntity<?> validateEmail(@RequestBody EmailRequest request) throws Exception {
        try{
            String email = request.getEmail();
            if(!utils.isValidEmailAddress(email)){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            String uuid = signupService.getVerifiedEmailUUID(email);
            EmailResponse response = new EmailResponse();
            response.setUuid(uuid);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch(Exception e){
            if(e.getMessage().equals(ErrorMessages.USER_ALREADY_EXISTS))
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }  
    }
    
}
