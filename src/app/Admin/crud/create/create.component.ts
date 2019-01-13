import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/Service/adverts.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import  * as firebase from 'firebase';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ImageUrl: string = "assets/images/upload1.png"
  FileToUpload: File;
getPostId :String;
uploadid:String;
  constructor( public service:AdvertsService) { 
    this.uploadid = firebase.database().ref().child('postImages').push().key;
  }

  ngOnInit() {
  
    this.service.getPost();
  }
  
 
  HandleFileInput(file: FileList) {
    this.FileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload)
    
   

  }
  onUpload(event:any){
    const file1 :File = event.target.files[0];
    const metaData ={ 'contentType':file1.type};
    const storageRef: firebase.storage.Reference= firebase.storage().ref('/AdImages/Uploads'+this.uploadid + Math.round(Math.random() *10000000).toString());
    storageRef.put(file1,metaData);

  }

  onClear(){
    this.service.form.reset();
    this.service.InitializeForm();
  }
  onSubmit(){
    if(this.service.form.valid){
      this.service.InsertAnAdvert(this.service.form.value);
     this.onClear(); 
    }
   }

}
