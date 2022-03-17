package com.codegym.conectbackeend.service;

import jdk.nashorn.internal.runtime.options.Option;

import java.util.Optional;

public interface IService <T> {

    Iterable<T> findAll();
    Optional<T> findById(int id);
    T save(T t);
    void remove(int id);

}
