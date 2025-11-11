import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  async ngOnInit() {
    const res = await axios.get('https://api.github.com/users/shreeramk');
    console.log(res);
    this.user = res.data;
  }
}
