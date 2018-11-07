import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  sitters: Sitter[] =[
    {userName: 'luistest', passWord: 'luistest', name: 'Luis', 
    gender: 'male',birthDate: new Date(1995, 2, 16), noCriminalRecord: true,
noChildRecord: true, hourlyWage:1337, address: 'some',
zipCode: '2300', city: 'KBH', calender:'string' },

{userName: 'gunnvatest', passWord: 'gunnvatest', name: 'Gunnva', 
    gender: 'Female',birthDate: new Date(1995, 2, 16), noCriminalRecord: true,
noChildRecord: true, hourlyWage:1337, address: 'some',
zipCode: '2300', city: 'KBH', calender:'string' },

{userName: 'testtest', passWord: 'testtest', name: 'testest', 
    gender: 'male',birthDate: new Date(1995, 2, 16), noCriminalRecord: true,
noChildRecord: true, hourlyWage:1337, address: 'some',
zipCode: '2300', city: 'KBH', calender:'string' }
  
  ];

  constructor() { }

  public addSitter(sitter:Sitter): void{
    this.sitters.push(sitter);
  }
}
