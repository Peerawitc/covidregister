import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  data: any;
  birthDate: any;
  today = moment();
  displayoutput = '';
  dateThai: any;
  agecal: number = 0;
  agediff: any;
  convertName:String = ""
  checkState: boolean = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.params;
    this.convertName = this.data.firstName+" "+this.data.lastName
    this.dateThai = moment(this.data.date)
      .add(543, 'years')
      .locale('th')
      .format('DD MMMM YYYY');
    this.agecal =
      543 +
      this.today.diff(this.data.date, 'year') +
      (65 - this.today.diff(this.data.date, 'year'));
    this.agediff = moment(this.data.date)
      .add(this.agecal, 'year')
      .locale('th')
      .format('DD MMMM YYYY');
    this.calage();
  }

  calage(): string {
    this.birthDate = this.today.diff(this.data.date, 'M');
    if (
      (this.birthDate >= 6 && this.birthDate <= 24) ||
      this.birthDate >= 780
    ) {
      this.checkState = false;
      this.displayoutput = 'สามารถเข้ารับบริการได้';
    }
    if (this.birthDate >= 25) {
      this.checkState = true;
      this.displayoutput = `ไม่สามารถเข้ารับบริการได้ เนื่องจากอายุจะครบ 65 ปี วันที่ ${this.agediff}`;
    }
    if (this.birthDate < 6) {
      this.checkState = true;
      this.displayoutput = `ไม่สามารถเข้ารับบริการได้ เนื่องจากอายุจะครบ 6 เดือน วันที่ ${this.agediff}`;
    }
    return '';
  }
  back() { }
}
