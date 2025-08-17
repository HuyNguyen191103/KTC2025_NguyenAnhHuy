package com.likelion.theory_spring_data_jpa.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.likelion.theory_spring_data_jpa.dto.CustomerDTO;
import com.likelion.theory_spring_data_jpa.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.emptyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest(controllers = CustomerController.class)
public class CustomerControllerTest {
    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper om;
    @MockitoBean
    CustomerService customerService;

    private final CustomerDTO dto1 =
            CustomerDTO.builder().id(1L).email("cus1@gmail.com").phone("09090909").name("cus1").address("Ho Chi Minh").build();

    @Test
    void getAllCustomers_shouldReturn200_andList() throws Exception {
        when(customerService.getAllCustomer()).thenReturn(List.of(dto1));

        mvc.perform(get("/api/customers"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].email", is("alice@mail.com")))
                .andExpect(jsonPath("$[1].email", is("bob@mail.com")));

        verify(customerService).getAllCustomer();
    }
}
