package com.example.Aula.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContatoController {
	
	@PostMapping("/contatos")
	public ResponseEntity<String> inserirContato(@RequestBody String contato) {
		return ResponseEntity.status(HttpStatus.CREATED).body(contato);
	}
	
	@GetMapping("/contatos")
	public String getContatos() {
		return "lista de contatos";
	}
	
	@GetMapping("/contatos/{id}")
	public String getUmContato() {
		return "Um contato";
	}
}
