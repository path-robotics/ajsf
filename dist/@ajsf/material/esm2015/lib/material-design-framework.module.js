import { Framework, FrameworkLibraryService, JsonSchemaFormModule, JsonSchemaFormService, WidgetLibraryModule, WidgetLibraryService } from '@ajsf/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialDesignFramework } from './material-design.framework';
import { MATERIAL_FRAMEWORK_COMPONENTS } from './widgets/public_api';
import { fixAngularFlex } from './angular-flex-monkey-patch';
/**
 * unused @angular/material modules:
 * MatDialogModule, MatGridListModule, MatListModule, MatMenuModule,
 * MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
 * MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
 * ,
 */
export const ANGULAR_MATERIAL_MODULES = [
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
    MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatStepperModule, MatTabsModule, MatTooltipModule,
    MatToolbarModule, MatMenuModule, MatToolbarModule,
];
export class MaterialDesignFrameworkModule {
    constructor() {
        fixAngularFlex();
    }
}
MaterialDesignFrameworkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FlexLayoutModule,
                    ...ANGULAR_MATERIAL_MODULES,
                    WidgetLibraryModule,
                    JsonSchemaFormModule,
                ],
                declarations: [
                    ...MATERIAL_FRAMEWORK_COMPONENTS,
                ],
                exports: [
                    JsonSchemaFormModule,
                    ...MATERIAL_FRAMEWORK_COMPONENTS,
                ],
                providers: [
                    JsonSchemaFormService,
                    FrameworkLibraryService,
                    WidgetLibraryService,
                    { provide: Framework, useClass: MaterialDesignFramework, multi: true },
                ],
                entryComponents: [
                    ...MATERIAL_FRAMEWORK_COMPONENTS,
                ]
            },] }
];
MaterialDesignFrameworkModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLW1hdGVyaWFsL3NyYy9saWIvbWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFBRSxvQkFBb0IsRUFDMUMsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFFM0Q7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGFBQWE7SUFDNUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQjtJQUMxRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLG1CQUFtQjtJQUN0RSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7SUFDdEUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjtJQUNqRCxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCO0NBQ2xELENBQUM7QUE2QkYsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QztRQUNFLGNBQWMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQTlCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsR0FBRyx3QkFBd0I7b0JBQzNCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyw2QkFBNkI7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLEdBQUcsNkJBQTZCO2lCQUNqQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO2lCQUNyRTtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyw2QkFBNkI7aUJBQ2pDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGcmFtZXdvcmssXG4gIEZyYW1ld29ya0xpYnJhcnlTZXJ2aWNlLFxuICBKc29uU2NoZW1hRm9ybU1vZHVsZSxcbiAgSnNvblNjaGVtYUZvcm1TZXJ2aWNlLFxuICBXaWRnZXRMaWJyYXJ5TW9kdWxlLCBXaWRnZXRMaWJyYXJ5U2VydmljZVxufSBmcm9tICdAYWpzZi9jb3JlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZsZXhMYXlvdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtNYXRlcmlhbERlc2lnbkZyYW1ld29ya30gZnJvbSAnLi9tYXRlcmlhbC1kZXNpZ24uZnJhbWV3b3JrJztcbmltcG9ydCB7TUFURVJJQUxfRlJBTUVXT1JLX0NPTVBPTkVOVFN9IGZyb20gJy4vd2lkZ2V0cy9wdWJsaWNfYXBpJztcbmltcG9ydCB7Zml4QW5ndWxhckZsZXh9IGZyb20gJy4vYW5ndWxhci1mbGV4LW1vbmtleS1wYXRjaCc7XG5cbi8qKlxuICogdW51c2VkIEBhbmd1bGFyL21hdGVyaWFsIG1vZHVsZXM6XG4gKiBNYXREaWFsb2dNb2R1bGUsIE1hdEdyaWRMaXN0TW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRNZW51TW9kdWxlLFxuICogTWF0UGFnaW5hdG9yTW9kdWxlLCBNYXRQcm9ncmVzc0Jhck1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICogTWF0U2lkZW5hdk1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsIE1hdFNvcnRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLFxuICogLFxuICovXG5leHBvcnQgY29uc3QgQU5HVUxBUl9NQVRFUklBTF9NT0RVTEVTID0gW1xuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLCBNYXRDYXJkTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0U2xpZGVyTW9kdWxlLCBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSwgTWF0VGFic01vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSwgTWF0TWVudU1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIC4uLkFOR1VMQVJfTUFURVJJQUxfTU9EVUxFUyxcbiAgICBXaWRnZXRMaWJyYXJ5TW9kdWxlLFxuICAgIEpzb25TY2hlbWFGb3JtTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5NQVRFUklBTF9GUkFNRVdPUktfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEpzb25TY2hlbWFGb3JtTW9kdWxlLFxuICAgIC4uLk1BVEVSSUFMX0ZSQU1FV09SS19DT01QT05FTlRTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBKc29uU2NoZW1hRm9ybVNlcnZpY2UsXG4gICAgRnJhbWV3b3JrTGlicmFyeVNlcnZpY2UsXG4gICAgV2lkZ2V0TGlicmFyeVNlcnZpY2UsXG4gICAge3Byb3ZpZGU6IEZyYW1ld29yaywgdXNlQ2xhc3M6IE1hdGVyaWFsRGVzaWduRnJhbWV3b3JrLCBtdWx0aTogdHJ1ZX0sXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLk1BVEVSSUFMX0ZSQU1FV09SS19DT01QT05FTlRTLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRGVzaWduRnJhbWV3b3JrTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZml4QW5ndWxhckZsZXgoKTtcbiAgfVxufVxuIl19