import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import { CreateEmployeeComponent } from './Admin/create-employee/create-employee.component';
import { EmployeeListComponent } from './Admin/employee-list/employee-list.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { CreateProductComponent } from './Admin/create-product/create-product.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { GamingComponent } from './components/gaming/gaming.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';

// import { NgxUiLoaderHttpModule, NgxUiLoaderModule, SPINNER } from 'ngx-ui';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserDetailComponent,
    HomeComponent,
    HomeItemComponent,
    HomeListComponent,
    HomeDetailComponent,
    AdminLoginComponent,
    AdminPageComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UserListComponent,
    CreateProductComponent,
    AdminHomeComponent,
    AboutUsComponent,
    ContactComponent,
    GamingComponent,
    AccessoriesComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,  
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    Ng2FilterPipeModule,
    MatIconModule,
    NgxSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
