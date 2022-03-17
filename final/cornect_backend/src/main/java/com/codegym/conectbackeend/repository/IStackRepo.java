package com.codegym.conectbackeend.repository;

import com.codegym.conectbackeend.model.entity.Stack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;


@Transactional
public interface IStackRepo extends JpaRepository<Stack,Integer> {

//    @Query(value = "DELETE FROM stack WHERE id = ?1",nativeQuery = true)
//    void deleteById(int id);
}
