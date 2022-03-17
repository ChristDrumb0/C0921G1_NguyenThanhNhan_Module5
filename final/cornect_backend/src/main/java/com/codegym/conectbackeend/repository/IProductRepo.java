package com.codegym.conectbackeend.repository;

import com.codegym.conectbackeend.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;


@Transactional
public interface IProductRepo extends JpaRepository<Product,Integer> {

}
