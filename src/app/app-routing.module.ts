import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { FormSuccessPageComponent } from './form-success-page/form-success-page.component';

const routes: Routes = [
  {path:'', component: FormPageComponent},
  {path: 'successful', component: FormSuccessPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


