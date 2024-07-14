package com.app.todo.signup;

import org.springframework.stereotype.Repository;

import com.app.todo.signup.entity.SignupEntity;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface SignupRepository extends JpaRepository<SignupEntity, String> {
    
}
