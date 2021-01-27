import { User } from './../models/user.model';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

    users: User[] =  [
    	{
      	id: 1,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
        firstname: 'Deborah',
        lastname: 'Miller',
        age: '25',
        email: 'deborah@gmail.com',
        address: '14th Street'
      },
      {
      	id: 2,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
        firstname: 'Johannes',
        lastname: 'Myles',
        age: '34',
        email: 'jmyles@gmail.com',
        address: '15th Street'
      },
      {
      	id: 3,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
        firstname: 'Britta',
        lastname: 'Rhudinbergh',
        age: '43',
        email: 'brhud@gmail.com',
        address: '17th Street'
      },
      {
      	id: 4,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',        
        firstname: 'Olivia',
        lastname: 'Brown',
        age: '44',
        email: 'brownolivia@gmail.com',
        address: '19th Street'
      },
      {
      	id: 5,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',        
        firstname: 'Daniel',
        lastname: 'Rudin',
        age: '32',
        email: 'danielr@gmail.com',
        address: '21th Street'
      },
      {
      	id: 6,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',        
        firstname: 'Teressa',
        lastname: 'Sandhurst',
        age: '35',
        email: 'teressas@gmail.com',
        address: '11th Street'
      },
      {
      	id: 7,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',        
        firstname: 'Dina',
        lastname: 'Sokolowski',
        age: '28',
        email: 'dina.s@gmail.com',
        address: '12th Street'
      },
      {
      	id: 8,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',        
        firstname: 'André',
        lastname: 'Szillagy',
        age: '23',
        email: 'andres@gmail.com',
        address: '14th Street'
       }, 
      {
      	id: 9,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',          
        firstname: 'Fabian',
        lastname: 'Stocker',
        age: '45',
        email: 'fabianstocker@gmail.com',
        address: '14th Street'
      },
      {
      	id: 10,
        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',          
        firstname: 'Christian',
        lastname: 'Williams',
        age: '41',
        email: 'chwilliams@gmail.com',
        address: '1th Street'
      },      
    ]

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

}


