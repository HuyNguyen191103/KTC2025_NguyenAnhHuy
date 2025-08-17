package com.likelion.theory_spring_data_jpa.service;

import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;
import com.likelion.theory_spring_data_jpa.entity.Customer;
import com.likelion.theory_spring_data_jpa.mapper.CustomerMapper;
import com.likelion.theory_spring_data_jpa.repository.CustomerRepo;
import com.likelion.theory_spring_data_jpa.service.impl.CustomerServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class CustomerServiceTest {
    @Mock
    CustomerRepo repository;
    @Mock
    CustomerMapper mapper;

    CustomerServiceImpl service;

    Customer entity1;
    CustomerDTO dto1;

    @BeforeEach
    void setUp() {
        service = new CustomerServiceImpl(repository, mapper);

        entity1 = Customer.builder().id(1L).email("cus1@gmail.com").phone("09090909").name("cus1").address("Ho Chi Minh").build();
        dto1 = CustomerDTO.builder().id(1L).email("cus1@gmail.com").phone("09090909").name("cus1").address("Ho Chi Minh").build();
    }
}
