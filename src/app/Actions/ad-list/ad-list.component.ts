import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/Service/adverts.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  constructor( public service:AdvertsService) { }
listData:MatTableDataSource<any>;
displayedColumns: string [] =['ImageUrl', 'Body','Website'];
  ngOnInit() {
    this.service.getPost().subscribe(
 list=>{
   let array =list.map(item=>{
    return {
      $key: item.key,
      ...item.payload.val()
    };
   });
   this.listData= new MatTableDataSource(array);
 }

    );
  }

}
