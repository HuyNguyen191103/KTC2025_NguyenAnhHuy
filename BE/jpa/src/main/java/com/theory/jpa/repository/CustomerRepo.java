package com.theory.jpa.repository;

import com.theory.jpa.models.Customer;

import java.util.List;

public interface CustomerRepo {
    void insert(Customer customer);
    Customer selectById(Long id);
    Customer selectByEmail(String email);
    List<Customer> selectAll();
    void delete(Long id);
    void update(Customer customer);
}
