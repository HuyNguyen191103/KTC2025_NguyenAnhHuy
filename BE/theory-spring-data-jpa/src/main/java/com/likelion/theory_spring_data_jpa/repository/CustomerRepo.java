package com.likelion.theory_spring_data_jpa.repository;

import com.likelion.theory_spring_data_jpa.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
    Customer findByEmail(String email);
}
