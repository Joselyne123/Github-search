import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {StrikethroughDirective} from './strikethrough.directive'
import {HttpClientModule} from '@angular/common/http'
import {GitRequestService} from './git-request.service'
import {RouterModule,Routes} from '@angular/router';
import {DatePipe} from './date.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToggleComponent } from './toggle/toggle.component';
const routes:Routes =[
  {path: 'input-name',component:HomeComponent},
  {path: 'search-details',component:ToggleComponent},
  {path:'',redirectTo:'/search-details',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatePipe,
    StrikethroughDirective,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }