import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddProductTemplateComponent } from './components/add-product-template/add-product-template.component';
import { AdminShowProductComponent } from './components/admin-show-product/admin-show-product.component';
import { CartParentComponent } from './components/Cart/cart-parent/cart-parent.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { AdminGuard } from './components/User/login/admin.guard';
import { LoginComponent } from './components/User/login/login.component';
import { UserGuaredGuard } from './components/User/user-guared.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Products', component:CartParentComponent},
  {path:"Product/:PID",component:ProductDetailsComponent},
  {path:"ContactUs",component:ContactusComponent},
  {path:"AbouttUs",component:AboutusComponent},
  {path:"AddTempProduct",component:AddProductTemplateComponent,canActivate:[AdminGuard]},
  {path:"Register",component:RegisterationComponent},
  {path:"Login",component:LoginComponent},
  {path:"EditProduct/:PID",component:EditComponentComponent,canActivate:[AdminGuard]},
  {path:"AdminProduct",component:AdminShowProductComponent,canActivate:[AdminGuard]},
  {path:"Invoice",component:InvoiceComponent,canActivate:[UserGuaredGuard]},
  {path:"User",loadChildren:()=>import('src/app/components/user-model/user-model.module').then(mod=>mod.UserModelModule)},
  {path:"**", component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
