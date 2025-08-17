package com.likelion.mapper;

import com.likelion.dto.CustomerDto;
import com.likelion.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    CustomerDto toDto(Customer customer);

    Customer toEntity(CustomerDto dto);

    List<CustomerDto> toDtoList(List<Customer> customers);

    void updateEntityFromDto(CustomerDto dto, @MappingTarget Customer entity);
}
