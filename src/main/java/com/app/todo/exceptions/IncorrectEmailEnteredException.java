package com.app.todo.exceptions;

public class IncorrectEmailEnteredException extends Exception {
    public IncorrectEmailEnteredException(){
        super(ErrorMessages.INCORRECT_EMAIL);
    }
}
