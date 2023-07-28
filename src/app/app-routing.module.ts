import { NgModule, createComponent } from "@angular/core";
import { PreloadAllModules, PreloadingStrategy, Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { VariableComponent } from "./variable/variable.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { EventbindingComponent } from "./eventbinding/eventbinding.component";
import { TwowaybindingComponent } from "./twowaybinding/twowaybinding.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { RectangleComponent } from "./rectangle/rectangle.component";
import { CircleComponent } from "./circle/circle.component";
import { BmiComponent } from "./bmi/bmi.component";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { MarksheetComponent } from "./marksheet/marksheet.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { BankaccountsComponent } from "./bankaccounts/bankaccounts.component";
import { FlipcartComponent } from "./flipcart/flipcart.component";
import { MailComponent } from "./mail/mail.component";
import { ActivityComponent } from "./activity/activity.component";
import { MemesComponent } from "./memes/memes.component";
import { PersonalComponent } from "./personal/personal.component";
import { StudentComponent } from "./student/student.component";
import { PracticeComponent } from "./practice/practice.component";
import { CreateVehicleComponent } from "./create-vehicle/create-vehicle.component";
import { AccountComponent } from "./account/account.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { authenticationGuard } from "./authentication.guard";
import { notifyGuard } from "./notify.guard";
import { VechicleDetailsComponent } from "./vechicle-details/vechicle-details.component";
import { ProductsComponent } from "./products/products.component";
import { ParentComponent } from "./parent/parent.component";
import { ItemComponent } from "./item/item.component";
import { NavComponent } from "./nav/nav.component";
import { CartComponent } from "./cart/cart.component";
import { Parent1Component } from "./parent1/parent1.component";
import { Parent2Component } from "./parent2/parent2.component";
import { Parent3Component } from "./parent3/parent3.component";
import { AboutCompanyComponent } from "./about/about-company/about-company.component";
import { AboutCeoComponent } from "./about/about-ceo/about-ceo.component";


const routes:Routes = [
    {path:'login', component:LoginComponent},
    {path:'dashboard', component: DashboardComponent,canActivate:[authenticationGuard],children:[
       {path:'home',component:HomeComponent},
       {path:'info',component:InfoComponent}, 
       {path:'variable',component:VariableComponent},
       {path:'interpolation',component:InterpolationComponent},
       {path:'eventbinding',component:EventbindingComponent},
       {path:'twowaybinding',component:TwowaybindingComponent},
       {path:'Calculator',component:CalculatorComponent},
       {path:'Rectangle',component:RectangleComponent},
       {path:'Circle',component:CircleComponent},
       {path:'Bmi',component:BmiComponent},
       {path:'structural-directives',component:StructuralDirectivesComponent},
       {path:'attribute-directives',component:AttributeDirectivesComponent},
       {path:'Marksheet',component:MarksheetComponent},
       {path:'vehicle',component:VehicleComponent},
       {path:'Bankaccounts',component:BankaccountsComponent},
       {path:'Flipcart',component:FlipcartComponent},
       {path:'mail',component:MailComponent},
       {path:'activity',component:ActivityComponent},
       {path:'memes',component:MemesComponent},
       {path:'personal',component:PersonalComponent},
       {path:'student',component:StudentComponent},
       {path:'practice',component:PracticeComponent},
       {path:'create-vehicle',component:CreateVehicleComponent,canActivate:[notifyGuard]},
       {path:'edit-vehicle/:id',component:CreateVehicleComponent},
       {path:'account',component:AccountComponent},
       {path:'create-user',component:CreateUserComponent, canActivate:[notifyGuard]},
       {path:'create-product',component:CreateProductComponent, canDeactivate:[notifyGuard]},
       {path:'vehicle-details/:id',component:VechicleDetailsComponent},
       {path:'products',component:ProductsComponent},
       {path:'parent', component:ParentComponent},
       {path:'item',component:ItemComponent},
       {path:'nav',component:NavComponent},
       {path:'cart',component:CartComponent},
       {path:'parent1',component:Parent1Component},
       {path:'parent2',component:Parent2Component},
       {path:'parent3',component:Parent3Component},
       {path:'about-company', component:AboutCompanyComponent},
       {path:'about-ceo',component:AboutCeoComponent},
       {
            path: 'contact',
            loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
       }
     
    ]},
    {path:'',component:LoginComponent},
    {path:'**',component:PagenotfoundComponent}
]

@NgModule({
    imports:[ RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}