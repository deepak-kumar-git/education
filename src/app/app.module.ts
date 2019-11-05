import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HubComponent } from './component/hub/hub.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ClassComponent } from './component/class/class.component';
import { ClassTeacherComponent } from './component/class-teacher/class-teacher.component';
import { StudentComponent } from './component/student/student.component';
import { AnnouncementComponent } from './component/announcement/announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    ProfileComponent,
    ClassComponent,
    ClassTeacherComponent,
    StudentComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
