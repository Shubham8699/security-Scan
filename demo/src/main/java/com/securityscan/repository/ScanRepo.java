package com.securityscan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.securityscan.pojos.Scan;

public interface ScanRepo extends JpaRepository<Scan,Integer> {

}
