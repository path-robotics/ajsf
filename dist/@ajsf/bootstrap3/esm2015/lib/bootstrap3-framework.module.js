import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Framework, JsonSchemaFormService, WidgetLibraryService, FrameworkLibraryService, JsonSchemaFormModule, WidgetLibraryModule } from '@ajsf/core';
import { Bootstrap3Framework } from './bootstrap3.framework';
import { Bootstrap3FrameworkComponent } from './bootstrap3-framework.component';
export class Bootstrap3FrameworkModule {
}
Bootstrap3FrameworkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    JsonSchemaFormModule,
                    CommonModule,
                    WidgetLibraryModule,
                ],
                declarations: [
                    Bootstrap3FrameworkComponent,
                ],
                exports: [
                    JsonSchemaFormModule,
                    Bootstrap3FrameworkComponent,
                ],
                providers: [
                    JsonSchemaFormService,
                    FrameworkLibraryService,
                    WidgetLibraryService,
                    { provide: Framework, useClass: Bootstrap3Framework, multi: true },
                ],
                entryComponents: [Bootstrap3FrameworkComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwMy1mcmFtZXdvcmsubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWpzZi1ib290c3RyYXAzL3NyYy9saWIvYm9vdHN0cmFwMy1mcmFtZXdvcmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNwQixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQXVCOUUsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBckJyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDWiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztpQkFDakU7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRnJhbWV3b3JrLFxuICBKc29uU2NoZW1hRm9ybVNlcnZpY2UsXG4gIFdpZGdldExpYnJhcnlTZXJ2aWNlLFxuICBGcmFtZXdvcmtMaWJyYXJ5U2VydmljZSxcbiAgSnNvblNjaGVtYUZvcm1Nb2R1bGUsXG4gIFdpZGdldExpYnJhcnlNb2R1bGVcbn0gZnJvbSAnQGFqc2YvY29yZSc7XG5pbXBvcnQge0Jvb3RzdHJhcDNGcmFtZXdvcmt9IGZyb20gJy4vYm9vdHN0cmFwMy5mcmFtZXdvcmsnO1xuaW1wb3J0IHtCb290c3RyYXAzRnJhbWV3b3JrQ29tcG9uZW50fSBmcm9tICcuL2Jvb3RzdHJhcDMtZnJhbWV3b3JrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBKc29uU2NoZW1hRm9ybU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgV2lkZ2V0TGlicmFyeU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQm9vdHN0cmFwM0ZyYW1ld29ya0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEpzb25TY2hlbWFGb3JtTW9kdWxlLFxuICAgIEJvb3RzdHJhcDNGcmFtZXdvcmtDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEpzb25TY2hlbWFGb3JtU2VydmljZSxcbiAgICBGcmFtZXdvcmtMaWJyYXJ5U2VydmljZSxcbiAgICBXaWRnZXRMaWJyYXJ5U2VydmljZSxcbiAgICB7cHJvdmlkZTogRnJhbWV3b3JrLCB1c2VDbGFzczogQm9vdHN0cmFwM0ZyYW1ld29yaywgbXVsdGk6IHRydWV9LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCb290c3RyYXAzRnJhbWV3b3JrQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXAzRnJhbWV3b3JrTW9kdWxlIHtcbn1cbiJdfQ==