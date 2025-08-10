package com.likelion.theory_spring_data_jpa.mapper;

import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;
import com.likelion.theory_spring_data_jpa.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring") // allows Spring to auto-inject the mapper
public interface CustomerMapper {
    CustomerDTO toCustomerDTO(Customer customer);
    Customer toEntity(CustomerDTO toDTO);
    List<CustomerDTO> toDtoList(List<Customer> customers);
    void updateEntity(CustomerDTO dto, @MappingTarget Customer entity);
}
