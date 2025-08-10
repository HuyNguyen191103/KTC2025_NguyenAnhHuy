package com.theory.jpa.service;

import com.theory.jpa.dtos.CustomerDTO;
import com.theory.jpa.mapper.CustomerMapper;
import com.theory.jpa.models.Customer;
import com.theory.jpa.repository.CustomerRepo;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

public class CustomerServiceImpl implements CustomerService{

    private final CustomerRepo customerRepo;
    private final CustomerMapper customerMapper;

    public CustomerServiceImpl(CustomerRepo customerRepo, CustomerMapper customerMapper) {
        this.customerRepo = customerRepo;
        this.customerMapper = customerMapper;
    }

    @Override
    public void createCustomer(CustomerDTO customerDTO) {
        Optional.ofNullable(customerRepo.selectByEmail(customerDTO.getEmail()))
                .ifPresentOrElse(existing -> {
                    throw new IllegalArgumentException("Customer already exists: "+customerDTO.getEmail());
                },
                        () -> {
                            Customer newCustomer = customerMapper.toEntity(customerDTO);
                            customerRepo.insert(newCustomer);
                        }
                        );

    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return customerRepo.selectAll().stream()
                .map(customerMapper::customerDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDTO getCustomer(Long id) {
        return Optional.ofNullable(customerRepo.selectById(id))
                .map(customerMapper::customerDTO)
                .orElse(null);
    }

    @Override
    public void updateCustomer(Long id, CustomerDTO customerDTO) {
        Optional.ofNullable(customerRepo.selectById(id))
                .ifPresentOrElse(existing -> {
                    customerMapper.updateEntity(customerDTO, existing);
                    customerRepo.update(existing);
                },
                        () -> {
                    throw new NoSuchElementException("Customer not found with id: "+id);
                        }
                        );

    }

    @Override
    public void deleteCustomer(Long id) {
        Optional.ofNullable(customerRepo.selectById(id))
                .ifPresentOrElse(customer -> customerRepo.delete(id),
                        () -> {throw new NoSuchElementException("Custom not found with id: "+id);}
                        );
    }
}
