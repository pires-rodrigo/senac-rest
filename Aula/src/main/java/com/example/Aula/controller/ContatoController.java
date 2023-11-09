package com.example.Aula.controller;

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

@RestController
@RequestMapping("/contatos")
public class ContatoController {
	
	@PostMapping()
	public ResponseEntity<String> inserirContato(@RequestBody String contato) {
		return ResponseEntity.status(HttpStatus.CREATED).body(contato);
	}
	
	@PutMapping("/{idcontato}")
	public ResponseEntity<String> alterarContato(@PathVariable("idcontato") int id, @RequestBody String contato) {
		return ResponseEntity.status(HttpStatus.OK).body(contato);
	}
	
	@GetMapping()
	public String getContatos() {
		return "lista de contatos";
	}
	
	@GetMapping("/{id}")
	public String getUmContato() {
		return "Um contato";
	}
}
