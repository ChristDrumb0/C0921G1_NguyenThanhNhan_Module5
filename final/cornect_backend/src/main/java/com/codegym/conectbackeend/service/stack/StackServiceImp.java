package com.codegym.conectbackeend.service.stack;

import com.codegym.conectbackeend.model.entity.Stack;
import com.codegym.conectbackeend.repository.IStackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class StackServiceImp implements IStackService{

    @Autowired
    public IStackRepo stackRepo;

    @Override
    public Iterable<Stack> findAll() {
        return stackRepo.findAll();
    }

    @Override
    public Optional<Stack> findById(int id) {
        return stackRepo.findById(id);
    }

    @Override
    public Stack save(Stack stack) {
        return stackRepo.save(stack);
    }

    @Override
    public void remove(int id) {
        stackRepo.deleteById(id);
    }
}
