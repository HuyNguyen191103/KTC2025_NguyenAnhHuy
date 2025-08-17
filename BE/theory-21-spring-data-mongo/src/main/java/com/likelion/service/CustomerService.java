package com.likelion.service;

import com.likelion.dto.CustomerDto;

import java.util.List;

public interface CustomerService {
    CustomerDto create(CustomerDto dto);
    CustomerDto update(String id, CustomerDto dto);
    CustomerDto getById(String id);
    List<CustomerDto> getAll();
    void delete(String id);
}
