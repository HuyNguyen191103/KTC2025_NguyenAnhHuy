package com.theory.jpa.service;

import com.theory.jpa.dtos.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void createCustomer(CustomerDTO customerDTO);
    List<CustomerDTO> getAllCustomer();
    CustomerDTO getCustomer(Long id);
    void updateCustomer(Long id, CustomerDTO customerDTO);
    void deleteCustomer(Long id);
}
