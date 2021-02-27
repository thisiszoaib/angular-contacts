import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <div class="overflow-scroll" style="height: calc(100vh - 64px)">
      <div
        *ngFor="let contact of data"
        class="p-4 border-b-2 border-gray-100 flex flex-row justify-between align-middle"
      >
        <div>
          <p class="text-xl">{{ contact.name }}</p>
          <p class="text-gray-500 text-lg">{{ contact.phone }}</p>
        </div>
        <a class="flex items-center" [href]="'tel:' + contact.phone">
          <span
            class="material-icons p-3 rounded-full opacity-80 shadow-md bg-green-400 hover:opacity-100 hover:shadow-lg"
          >
            phone
          </span>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() data: any[];

  constructor() {}

  ngOnInit(): void {}
}
