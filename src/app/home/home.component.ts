import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { CommonModule } from '@angular/common';
import { Clothes } from '../shared/models/Clothes';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  shirts:Clothes[] = [];
  constructor(private clothesService: ClothesService){}
  
  ngOnInit(): void {
    this.shirts = this.clothesService.getAllShirts();
  }
}
