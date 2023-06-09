import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DatabindingeventComponent } from './databindingevent/databindingevent.component';
import { AngulardirectivesComponent } from './angulardirectives/angulardirectives.component';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AppendPipe } from './pipes/append.pipes';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AngularServicesComponent } from './angular-services/angular-services.component';
import { PostService } from './services/post.service';
import { AngularformComponent } from './angularform/angularform.component';
import { AngularreactiveformsComponent } from './angularreactiveforms/angularreactiveforms.component';
import { RouterModule } from '@angular/router';
import { SinglepostComponent } from './singlepost/singlepost.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    PostComponent,
    PostListComponent,
    DatabindingeventComponent,
    AngulardirectivesComponent,
    UserDetailsFormComponent,
    AngularPipesComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    AngularServicesComponent,
    AngularformComponent,
    AngularreactiveformsComponent,
    SinglepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'AngularreactiveformsComponent',component:AngularreactiveformsComponent},
      {path:'PostListComponent',component:PostListComponent},
      {path:'SinglepostComponent/:id',component:SinglepostComponent}
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
