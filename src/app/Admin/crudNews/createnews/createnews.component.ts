import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/Service/news.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.css']
})
export class CreatenewsComponent implements OnInit {

  ImageUrl: string = "assets/images/upload1.png"
  FileToUpload: File;
  getPostId: String;
  uploadid: String;
  constructor(public service: NewsService) {

  }

  ngOnInit() {
  
    this.service.getPost();
    this.uploadid = firebase.database().ref().child('postImages').push().key;
    return this.getPostId = 'gs://fradal-c2170.appspot.com/postImages' + this.uploadid;
  }


  HandleFileInput(file: FileList) {
    this.FileToUpload = document.getElementById("file-id").file[0].name;

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload)



  }

  onUpload(event:any){
    const file1 :File = event.target.files[0];
    const metaData ={ 'contentType':file1.type};
    const storageRef: firebase.storage.Reference= firebase.storage().ref('/NewsImages/Uploads'+this.uploadid + Math.round(Math.random() *10000000).toString());
    storageRef.put(file1,metaData);

  }
  onClear() {
    this.service.form1.reset();
    this.service.InitializeForm();
  }
  onSubmit() {
    if (this.service.form1.valid) {
     this.service.InsertAnAdvert(this.service.form1.value);
      this.onClear();
    }
  }


}
