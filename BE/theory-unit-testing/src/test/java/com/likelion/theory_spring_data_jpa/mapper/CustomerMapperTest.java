package com.likelion.theory_spring_data_jpa.mapper;

import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;
import com.likelion.theory_spring_data_jpa.entity.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import static org.assertj.core.api.Assertions.assertThat;

public class CustomerMapperTest {
    private CustomerMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = Mappers.getMapper(CustomerMapper.class);
    }

    @Test
    void toDto_mapAllFields() {
        Customer entity = Customer.builder().id(1L).email("cus1@gmail.com").phone("09090909").name("cus1").address("Ho Chi Minh").build();

        CustomerDTO dto = mapper.toCustomerDTO(entity);

        assertThat(dto.getId()).isEqualTo(1L);
        assertThat(dto.getEmail()).isEqualTo("cus1@gmail.com");
        assertThat(dto.getName()).isEqualTo("cus1@");
        assertThat(dto.getPhone()).isEqualTo("09090909");
        assertThat(dto.getAddress()).isEqualTo("Ho Chi Minh");

    }

}
