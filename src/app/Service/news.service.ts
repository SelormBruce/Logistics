import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  ImageUrl: string = "assets/images/upload1.png"
  constructor(public fbdb: AngularFireDatabase) {


  }
  createpost: AngularFireList<any>;

  form1 : FormGroup= new FormGroup(
    {
      $key: new FormControl(null),
      Title: new FormControl(),
      ImageUrl: new FormControl(),
      Body: new FormControl(),
      Telephone: new FormControl('+233 050 994 9000'),
      Email: new FormControl('INFO@FRADALLOGISTICS.COM'),
      Website: new FormControl('https://fradal-c2170.firebaseapp.com')
    }
  );

  getPost() {
    this.createpost = this.fbdb.list('News');
    return this.createpost.snapshotChanges();
  }

  InsertAnAdvert(Ad) {
    this.createpost.push({
      Title: Ad.Title,
      ImageUrl: Ad.ImageUrl,
      Body: Ad.Body,
      Telephone: Ad.Telephone,
      Email: Ad.Email,
      Website: Ad.Website
    });
  }
  UpdateAnAdvert(Ad) {
    this.createpost.update(Ad.$key, {
      Title: Ad.Title,
      ImageUrl: Ad.ImageUrl,
      Body: Ad.Body,
      Telephone: Ad.Telephone,
      Email: Ad.Email,
      Website: Ad.Website
    });
  }
  DeleteAnAd($key: string) {
    this.createpost.remove($key);
  }
  InitializeForm() {
    this.form1.setValue({
      $key: null,
      Title: '',
      ImageUrl: '',
      Body: '',
      Telephone: '+233 050 994 9000',
      Email: 'INFO@FRADALLOGISTICS.COM',
      Website: 'https://fradal-c2170.firebaseapp.com'
    });
  }
}
