package com.theory.jpa.impl;

import com.theory.jpa.dtos.CustomerDTO;
import com.theory.jpa.mapper.CustomerMapper;
import com.theory.jpa.models.Customer;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class CustomerRepositoryImpl implements CustomerMapper {
    @Override
    public CustomerDTO customerDTO(Customer customer) {
        CustomerDTO dto = new CustomerDTO();
        BeanUtils.copyProperties(customer, dto);
        return dto;
    }

    @Override
    public Customer toEntity(CustomerDTO dto) {
        Customer entity = new Customer();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    @Override
    public void updateEntity(CustomerDTO dto, Customer customer) {
        BeanUtils.copyProperties(dto,customer, "id");
    }
}
