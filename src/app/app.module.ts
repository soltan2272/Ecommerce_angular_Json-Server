import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './components/product/product.component';
import { CardDirective } from './directives/card.directive';
import { SsnToBirthPipe } from './pipes/ssn-to-birth.pipe';
import { CreditcardPipe } from './pipes/creditcard.pipe';
import { ArabiconlyDirective } from './directives/arabiconly.directive';
import { MapPipe } from './pipes/map.pipe';
import { CartParentComponent } from './components/Cart/cart-parent/cart-parent.component';
import { CartChildComponent } from './components/Cart/cart-child/cart-child.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductTemplateComponent } from './components/add-product-template/add-product-template.component';
import { LoginComponent } from './components/User/login/login.component';
import { ProductApiService } from './Services/product-api.service';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { AdminShowProductComponent } from './components/admin-show-product/admin-show-product.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { UsrControlComponent } from './components/usr-control/usr-control.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    NavigationComponent,
    ProductComponent,
    CardDirective,
    SsnToBirthPipe,
    CreditcardPipe,
    ArabiconlyDirective,
    MapPipe,
    CartParentComponent,
    CartChildComponent,
    ProductDetailsComponent,
    AddProductTemplateComponent,
    LoginComponent,
    EditComponentComponent,
    AdminShowProductComponent,
    LeftSideComponent,
    ContactusComponent,
    AboutusComponent,
    InvoiceComponent,
    RegisterationComponent,
    UsrControlComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
