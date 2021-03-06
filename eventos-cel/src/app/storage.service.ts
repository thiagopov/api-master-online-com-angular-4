import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  get(index) {
     return localStorage.getItem(index);
  }

  set(index, value) {
    localStorage.setItem(index, value);
  }

  remove(index) {
    localStorage.removeItem(index);
  }

}
