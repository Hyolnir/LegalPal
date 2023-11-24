import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FireserviceService {
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  loginWithEmail(data: { email: any; password: any; }) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data: { email: any; password: any; }) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data: { uid: any; }) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }

  getDetails(data: { uid: any; }) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }

  logout() {
    return this.auth.signOut();
  }


}
