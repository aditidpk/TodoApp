package com.app.todo.exceptions;

public class UserAlreadyExistsException extends Exception {
    public UserAlreadyExistsException(){
        super(ErrorMessages.USER_ALREADY_EXISTS);
    }
}
