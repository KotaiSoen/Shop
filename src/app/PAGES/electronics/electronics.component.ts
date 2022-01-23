import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Sony TV',
      price: 10000.99,
      image: 'https://5.imimg.com/data5/HL/XV/GLADMIN-66789150/sony-r30f-led-tv-500x500.png'
    },
    {
      name: 'iphone12',
      price: 1000.99,
      image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-2.jpg'
    },
    {
      name: 'AC',
      price: 2000.99,
      image: 'https://media.istockphoto.com/photos/portable-air-conditioner-in-room-on-the-wooden-floor-3d-rendering-picture-id898247548?k=20&m=898247548&s=612x612&w=0&h=WzMkYi1UrYaTTyQb8DEaWp6MgevZU-LPA4grRfYW1XY='
    },
    {
      name: 'HP laptop',
      price: 5000.99,
      image: 'https://cdn.vox-cdn.com/thumbor/BJP7nJgGt7qrnmheJWianxVtWu8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12801263/2013-04-29_23-34-04-1020.1419979580.jpg'
    },
    {
      name: 'beats by dre',
      price: 500.99,
      image: 'https://i5.walmartimages.com/asr/f76ac660-9f5a-495c-9af3-4bec619de77a_1.cf2fbfe5d7071433a3c80a2360a3d7f4.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
