import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { Roomex } from '../models/roomexForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
	private userData: Roomex;
	private userDataListener = new Subject<Roomex>();
	constructor(private router: Router) { }

	// This is a simple example of a service that can be used to store data
	// that is needed across multiple components. In this case, we are storing
	// the user's data from the main-form
	setUserData(data: Roomex) {
		this.userData = data;
		this.userDataListener.next(this.userData);
		this.router.navigate(['/results']);
	}

	getUpdatedUserData() {
		return this.userDataListener.asObservable();
	}

}
