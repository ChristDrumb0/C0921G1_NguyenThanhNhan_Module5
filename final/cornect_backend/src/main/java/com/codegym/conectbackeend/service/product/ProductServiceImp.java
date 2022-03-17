package com.codegym.conectbackeend.service.product;

import com.codegym.conectbackeend.model.entity.Product;
import com.codegym.conectbackeend.repository.IProductRepo;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImp implements IProductService{
    @Autowired
    public IProductRepo productRepo;

    @Override
    public Iterable<Product> findAll() {
        return productRepo.findAll();
    }

    @Override
    public Optional<Product> findById(int id) {
        return productRepo.findById(id);
    }

    @Override
    public Product save(Product product) {
        return productRepo.save(product);
    }

    @Override
    public void remove(int id) {
        productRepo.deleteById(id);
    }
}
