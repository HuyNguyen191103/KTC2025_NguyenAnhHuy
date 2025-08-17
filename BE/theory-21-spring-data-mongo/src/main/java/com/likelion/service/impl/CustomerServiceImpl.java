package com.likelion.service.impl;

import com.likelion.dto.CustomerDto;
import com.likelion.exception.ResourceNotFoundException;
import com.likelion.mapper.CustomerMapper;
import com.likelion.repository.CustomerRepository;
import com.likelion.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper mapper;

    @Override
    public CustomerDto create(CustomerDto dto) {
        return mapper.toDto(customerRepository.save(mapper.toEntity(dto)));
    }

    @Override
    public CustomerDto update(String id, CustomerDto dto) {
        return customerRepository.findById(id)
                .map(existing -> {
                    mapper.updateEntityFromDto(dto, existing);
                    return mapper.toDto(customerRepository.save(existing));
                })
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public CustomerDto getById(String id) {
        return customerRepository.findById(id)
                .map(mapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public List<CustomerDto> getAll() {
        return mapper.toDtoList(customerRepository.findAll());
    }

    @Override
    public void delete(String id) {
        customerRepository.findById(id)
                .ifPresentOrElse(
                        customerRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("Not found: " + id);
                        });
    }
}
