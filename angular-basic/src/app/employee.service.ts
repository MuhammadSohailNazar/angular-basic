import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { id: 1, name: "Sohail", age: 26 },
      { id: 1, name: "Shoaib", age: 25 },
      { id: 1, name: "Ali", age: 18 },
      { id: 1, name: "Misbah", age: 14 }
    ];
  }
}
