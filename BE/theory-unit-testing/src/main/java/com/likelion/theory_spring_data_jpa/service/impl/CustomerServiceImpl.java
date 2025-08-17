package com.likelion.theory_spring_data_jpa.service.impl;

import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;
import com.likelion.theory_spring_data_jpa.entity.Customer;
import com.likelion.theory_spring_data_jpa.mapper.CustomerMapper;
import com.likelion.theory_spring_data_jpa.repository.CustomerRepo;
import com.likelion.theory_spring_data_jpa.service.CustomerService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepo customerRepo;
    private final CustomerMapper customerMapper;
    @Override
    public void createCustomer(CustomerDTO customerDTO) {
        Optional.ofNullable(customerRepo.findByEmail(customerDTO.getEmail()))
                .ifPresentOrElse(
                        existing -> {
                            throw new IllegalArgumentException(
                                    "Customer already exists with email: " + customerDTO.getEmail());
                        },
                        () -> {
                            Customer newCustomer = customerMapper.toEntity(customerDTO);
                            customerRepo.save(newCustomer);
                        });
    }

    @Override
    public CustomerDTO getCustomerById(Long id) {
        return customerRepo.findById(id)
                .map(customerMapper::toCustomerDTO)
                .orElse(null);
    }

    @Override
    public CustomerDTO getCustomerByEmail(String email) {
        return Optional.ofNullable(customerRepo.findByEmail(email))
                .map(customerMapper::toCustomerDTO)
                .orElse(null);
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return customerRepo.findAll().stream()
                .map(customerMapper::toCustomerDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void updateCustomer(Long id, CustomerDTO customerDTO) {
        customerRepo.findById(id)
                .ifPresentOrElse(
                        existing -> {
                            customerMapper.updateEntity(customerDTO, existing);
                            customerRepo.save(existing);
                        },
                        () -> {
                            throw new NoSuchElementException("Customer not found with id: " + id);
                        });
    }

    @Override
    public void deleteCustomer(Long id) {
        Optional.ofNullable(customerRepo.findById(id))
                .ifPresentOrElse(
                        existing -> {
                            customerRepo.deleteById(id);
                        },
                        () -> {
                            throw new NoSuchElementException("Customer not found with id: " + id);
                        });
    }
}
