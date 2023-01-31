import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  menuType: string = ""

  adicionar() {
    this.produtos.push("Nivaldo")
  }

  removerUltimo() {
    this.produtos.pop()
  }

  remover(index: number) {
    this.produtos.splice(index, 1)
  }

  produtos:string[] = []

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
  }

}
