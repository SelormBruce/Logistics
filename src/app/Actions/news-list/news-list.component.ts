import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Service/news.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor( public service:NewsService) { }
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
