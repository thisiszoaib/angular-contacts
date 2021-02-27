import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav
      class="bg-indigo-600 text-white h-16 w-auto p-4 flex flex-row justify-between items-center"
    >
      <span class="text-2xl">Contacts App</span>
      <button *ngIf="!search" class="flex items-center" (click)="showSearch()">
        <span class="material-icons">search</span>
      </button>

      <div *ngIf="search" class="flex flex-row bg-indigo-400 rounded p-2">
        <input
          class="bg-indigo-400 outline-none"
          autoFocus="true"
          (keydown)="searchContacts.emit($event.target.value)"
        />
        <button class="flex items-center" (click)="hideSearch()">
          <span class="material-icons">close</span>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() searchContacts = new EventEmitter<string>();

  search = false;

  constructor() {}

  ngOnInit(): void {}

  showSearch() {
    this.search = true;
  }

  hideSearch() {
    this.search = false;
  }
}
