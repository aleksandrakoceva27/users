import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFilterPipe } from '../../pipes/user-fiilter.pipe';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserFilterPipe]
})

export class UserListComponent implements OnInit {

    users: User[] = [];
    @Output() onSearch: EventEmitter<string> = new EventEmitter();
    searchText: string = '';
    sortAsc: boolean = true;
    sortDesc: boolean = false;
    showExtraInfo: boolean = false;
    filterMetadata = { count: 0 };


    constructor(private usersService: UsersService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.users = this.usersService.getAllUsers();
    }

    sortByAgeAsc() {
        this.sortAsc = false;
        this.sortDesc = true;
        this.users = this.users.sort((a,b) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0));
    }
    sortByAgeDesc() {
        this.sortAsc = true;
        this.sortDesc = false;
        this.users = this.users.sort((a,b) => (a.age < b.age) ? 1 : ((b.age < a.age) ? -1 : 0));
    }

    trackElement(index: number, element: any) {
        return element ? element.id : null;
      }

}
