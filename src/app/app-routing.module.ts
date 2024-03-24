import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-page/home.component';
import { UploadComponent } from './upload/upload-page/upload.component';
import { ResultComponent } from './result/result-page/result.component';
import { LoginComponent } from './login/login-page/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((min) => min.LoginModule),
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((min) => min.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload/upload.module').then((min) => min.UploadModule),
    component: UploadComponent,
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./result/result.module').then((min) => min.ResultModule),
    component: ResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
