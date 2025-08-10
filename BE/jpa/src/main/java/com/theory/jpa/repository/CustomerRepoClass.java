package com.theory.jpa.repository;

import com.theory.jpa.models.Customer;
import com.theory.jpa.util.HibernateUtility;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;
import java.util.Optional;

public class CustomerRepoClass implements CustomerRepo{
    @Override
    public void insert(Customer customer) {
        Transaction transaction = null;
        try(Session session = HibernateUtility.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.persist(customer);
            transaction.commit();

        } catch (Exception e) {
            if (Optional.ofNullable(transaction).isPresent()) transaction.rollback();
            e.printStackTrace();
        }
    }

    @Override
    public Customer selectById(Long id) {
        try(Session session = HibernateUtility.getSessionFactory().openSession()) {
            return session.get(Customer.class, id);
        }
    }

    @Override
    public Customer selectByEmail(String email) {
        try (Session session = HibernateUtility.getSessionFactory().openSession()) {
            return session.get(Customer.class, email);

        }
    }

    @Override
    public List<Customer> selectAll() {
        return List.of();
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void update(Customer customer) {

    }
}
