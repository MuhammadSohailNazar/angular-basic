import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    ComponentInteractionComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
