import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Select2Module } from 'ng2-select2';

import { PhasingRoutingModule } from './phasing-routing.module';
import { PhasingComponent } from './phasing.component';
import { FPAComponent } from './fpa/fpa.component';
import { BackLogsComponent } from './fpa/backlogs/backlogs.component';
import { EstimationComponent } from './fpa/estimation/estimation.component';
import { ImplementationComponent } from './fpa/implementation/implementation.component';
import { HotTableModule } from '@handsontable/angular';
import { FunctionsComponent } from './fpa/functions/functions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './fpa/components/components.component';
import { UserStoryComponent } from './fpa/user-story/user-story.component';
import { UserStoryServices } from '../../data-services/userStory.services'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BacklogServices } from '../../data-services/backlog.services';
import { FunctionsServices } from '../../data-services/functions.services';
import { TechComponentServices } from '../../data-services/techComponent.services';

@NgModule({
        imports: [CommonModule, PhasingRoutingModule, HotTableModule, FormsModule, ReactiveFormsModule, Select2Module, NgbModule.forRoot()],
        declarations: [PhasingComponent,
                FPAComponent,
                BackLogsComponent,
                EstimationComponent,
                ImplementationComponent,
                ComponentsComponent,
                UserStoryComponent,
                FunctionsComponent],
        providers: [BacklogServices, UserStoryServices, TechComponentServices, FunctionsServices]
})
export class PhasingModule { }
