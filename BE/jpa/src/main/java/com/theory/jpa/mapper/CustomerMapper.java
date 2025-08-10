package com.theory.jpa.mapper;

import com.theory.jpa.dtos.CustomerDTO;
import com.theory.jpa.models.Customer;

public interface CustomerMapper {
    CustomerDTO customerDTO(Customer customer);
    Customer toEntity(CustomerDTO dto);
    void updateEntity(CustomerDTO dto, Customer customer);
}
