package com.likelion.theory_spring_data_jpa.service;

import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void createCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomerById(Long id);
    CustomerDTO getCustomerByEmail(String email);
    List<CustomerDTO> getAllCustomer();
    void updateCustomer(Long id, CustomerDTO customerDTO);
    void deleteCustomer(Long id);
}
