import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalComponent } from './pages/modal/modal.component';

 

const firebaseConfig = {
  apiKey: "AIzaSyCYPojh0AazpUuUP9pXje7Ppl2cvxotFEM",
  authDomain: "bodayurliss.firebaseapp.com",
  projectId: "bodayurliss",
  storageBucket: "bodayurliss.firebasestorage.app",
  messagingSenderId: "1064151455569",
  appId: "1:1064151455569:web:f8f95326b8816b856f2570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
