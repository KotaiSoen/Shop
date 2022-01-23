import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  products: Product[] = [
    {
      name: 'To kill a mockingbird',
      price: 50.99,
      image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
    },
    {
      name: 'American gods',
      price: 70.99,
      image: 'https://flxt.tmsimg.com/assets/p13086256_b_v12_ao.jpg',
    },
    {
      name: 'Harry Potter',
      price: 40.99,
      image: 'https://images.penguinrandomhouse.com/cover/9780739360385',
    },
    {
      name: 'Hunger games',
      price: 55.99,
      image: 'https://kbimages1-a.akamaihd.net/f2aa88e7-a1b1-413c-a3db-4b348da4282e/1200/1200/False/catching-fire-hunger-games-book-two.jpg',
    },
    {
      name: 'The Name of the Wind',
      price: 45.99,
      image: 'https://target.scene7.com/is/image/Target/GUEST_fd542de5-758a-4b64-9a26-cd4864c776f3?wid=488&hei=488&fmt=pjpeg',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
