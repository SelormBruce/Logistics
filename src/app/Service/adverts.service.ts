import { Injectable } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  constructor() { }
  form: FormGroup = new FormControl(
    {
      $key: new FormControl(null),
      Tile : new FormControl(Validators.required),
      ImageUrl:new FormControl(Validators.required),
      Body: new FormControl(Validators.required),
      Telephone: new FormControl('(+233) 050 994 9000'),
      Email: new FormControl('INFO@FRADALLOGISTICS.COM'),
      Website: new FormControl('https://fradal-c2170.firebaseapp.com')
    }
  );
}
