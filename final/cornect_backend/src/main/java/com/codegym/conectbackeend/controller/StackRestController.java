package com.codegym.conectbackeend.controller;

import com.codegym.conectbackeend.model.entity.Product;
import com.codegym.conectbackeend.model.entity.Stack;
import com.codegym.conectbackeend.service.product.IProductService;
import com.codegym.conectbackeend.service.stack.IStackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("v1/stack")
@CrossOrigin(origins = "*")
public class StackRestController {
    @Autowired
    IStackService stackService;

    @Autowired
    IProductService productService;

    //lay List Product

    @GetMapping("/product")

    public ResponseEntity<Iterable<Product>> getProductList() {
        List<Product> productList = (List<Product>) productService.findAll();
        if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    //lay List Stack
    @GetMapping
    public ResponseEntity<Iterable<Stack>> getStackList() {
        List<Stack> stackList = (List<Stack>) stackService.findAll();
        if (stackList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(stackList, HttpStatus.OK);
    }

    //lay 1 Stack
    @GetMapping("/{id}")
    public ResponseEntity<Stack> getStack(@PathVariable int id) {
        Optional<Stack> stack = stackService.findById(id);
        if (!stack.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(stack.get(), HttpStatus.OK);
    }

    //create Stack
    @PostMapping
    public ResponseEntity createStack(@RequestBody Stack stackObj) {
        stackService.save(stackObj);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Delete Stack
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStack(@PathVariable int id) {

        Optional<Stack> stack = stackService.findById(id);

        if (!stack.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            stackService.remove(id);
            return ResponseEntity.ok().build();
        }

    }
}
