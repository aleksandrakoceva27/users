import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";
import { User } from "../models/user.model";


@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
    transform(users: User[], searchText: string, filterMetadata: any): any[] {
      if(!users) return [];
      if(!searchText) {
        filterMetadata.count = users.length;
        return users;
      } 
      if(searchText.length < 3) return users;

      searchText = searchText.toLowerCase();

      let filteredUsers = users.filter( user => {
        return user.firstname.toLowerCase().includes(searchText);
      });

      filterMetadata.count = filteredUsers.length;
      return filteredUsers;
     }
  }
