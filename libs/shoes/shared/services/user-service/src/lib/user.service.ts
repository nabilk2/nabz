import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUUID(): string {
    let uuid = localStorage.getItem('session-id');

    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem('session-id', uuid);
    }

    return uuid;
  }
}
