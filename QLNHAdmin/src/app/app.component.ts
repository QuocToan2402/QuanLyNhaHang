import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //constructor(private route: ActivatedRoute, private router:Routes){}
  items: MenuItem[] = [];
  title = 'Quản lý nhà hàng - Admin';ngOnInit() {
    this.items = [
        {
            label:'Nhà hàng',
            icon:'pi pi-fw pi-file',
        },
        {
            label:'Quyền',
            icon:'pi pi-fw pi-pencil',

        },
        {
            label:'Tình trạng',
            icon:'pi pi-fw pi-user',

        },
        {
            label:'Khu vực',
            icon:'pi pi-fw pi-calendar',

        },
        {
          label:'Đơn vị',
          icon:'pi pi-fw pi-calendar',

      },{
            label:'Khu vực',
            icon:'pi pi-fw pi-calendar',

        },
        {
          label:'Thể loại',
          icon:'pi pi-fw pi-calendar',

      },
      {
        label:'Nhân sự',
        icon:'pi pi-fw pi-calendar',

    },
    {
      label:'Bàn ăn',
      icon:'pi pi-fw pi-calendar',

  },
  {
            label:'Khu vực',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },

                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',

                }
            ]
        },
        {
          label:'Thức ăn',
          icon:'pi pi-fw pi-calendar',
      },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];
}
}
