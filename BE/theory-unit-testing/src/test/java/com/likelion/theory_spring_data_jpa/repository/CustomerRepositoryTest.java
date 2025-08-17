package com.likelion.theory_spring_data_jpa.repository;

import com.likelion.theory_spring_data_jpa.entity.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
public class CustomerRepositoryTest {

    @Autowired
    TestEntityManager testEntityManager;
    @Autowired
    CustomerRepo customerRepo;

    private Customer customer1;

    @BeforeEach
    void setUp() {
        customer1 = testEntityManager.persist(
                new Customer(null, "cus1@gmail.com", "cus1", "09090909", "Ho Chi Minh")
        );
        testEntityManager.flush();
    }

    @Test
    void findByEmail_shouldReturnCustomer_whenEmailExists() {
        Customer found = customerRepo.findByEmail("cus1@gmail.com");
        assertThat(found).isNotNull();
        assertThat(found.getName()).isEqualTo("cus1");
    }
}
