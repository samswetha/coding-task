import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },

{ path: 'tasks', component: TasksComponent },

{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
