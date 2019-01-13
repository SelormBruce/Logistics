import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ImageUrl: string = "assets/images/upload1.png"
  FileToUpload: File;

  constructor() { }

  ngOnInit() {
  }
  HandleFileInput(file: FileList) {
    this.FileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload)
  }

}
