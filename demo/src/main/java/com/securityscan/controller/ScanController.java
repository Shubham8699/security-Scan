package com.securityscan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.securityscan.dto.ErrorResponse;
import com.securityscan.pojos.Scan;
import com.securityscan.repository.ScanRepo;

@RestController
public class ScanController {

	@GetMapping("/")
	public String testMe() {
		System.out.println("in test me");
		return "Hello from REST!!!";
	}
	
	@Autowired
	private ScanRepo ScanRepo;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/scans")
	public ResponseEntity<?> getAllEmpDetails() {
		List<Scan> scans = ScanRepo.findAll();
		return new ResponseEntity<>(scans, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/scan/{id}")
	public ResponseEntity<?> getScanDetails(@PathVariable int id) {
		System.out.println("in get scan dtls " + id);
		Optional<Scan> optional = ScanRepo.findById(id);
		if (optional.isPresent())
			return new ResponseEntity<>(optional.get(), HttpStatus.OK);
		
		ErrorResponse resp = new ErrorResponse("Scan Id Invalid", "");
		return new ResponseEntity<>(resp, HttpStatus.NOT_FOUND);
	}

	@PostMapping("/scan")
	public ResponseEntity<?> addScanDetails(@RequestBody Scan e) {
		System.out.println("in add scan " + e.toString());
		System.out.println(e.getId());
		System.out.println(e.getStatus());
		System.out.println(e.getFindings());
		return new ResponseEntity<>(ScanRepo.save(e), HttpStatus.CREATED);
	}
	
}
