import { Component, OnInit } from '@angular/core';
import {FenceType} from "../data/fence-type";
import {MatDialog} from "@angular/material/dialog";
import {DeleteModalComponent} from "../components/delete-modal/delete-modal.component";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public fenceTypeName = '';

  public saveFenceType() : void {
    this.fenceTypes.push({ name: this.fenceTypeName, id: this.fenceTypes.length +1  });
    this.fenceTypeName = '';
  }

  public deleteFenceType(id: number) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data: {name: 'THIS FENCE?!'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }

  public fenceTypes: FenceType[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
