import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'/main',component:MainComponent},
    {path:'/register',component:RegisterComponent},
    {path:'/login',component:LoginComponent},
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'**',component:MainComponent}
];
