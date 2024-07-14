package com.app.todo.exceptions;

public class InvalidOTPException extends Exception {
    public InvalidOTPException(){
        super(ErrorMessages.INVALID_OTP);
    }
}
