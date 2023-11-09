package com.example.Aula.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Aula.entities.Contato;
import com.example.Aula.repository.ContatoRepository;

@RestController
@RequestMapping("/contatos")
public class ContatoController {
	@Autowired
	ContatoRepository repo;
	
	@GetMapping()
	public ResponseEntity<List<Contato>> getContatos() {
		return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
	}
		
	@PostMapping()
	public ResponseEntity<Contato> inserirContato(@RequestBody Contato contato) {
		Contato ct = repo.save(contato);
		return ResponseEntity.status(HttpStatus.CREATED).body(ct);
	}
	
	@PutMapping("/{idcontato}")
	public ResponseEntity<String> alterarContato(@PathVariable("idcontato") int id, 
			@RequestBody String contato) {
		return ResponseEntity.status(HttpStatus.OK).body(contato);
	}
	
	
	
	@GetMapping("/{id}")
	public String getUmContato() {
		return "Um contato";
	}
}
