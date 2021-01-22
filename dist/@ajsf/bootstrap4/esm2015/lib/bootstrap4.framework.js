import { Injectable } from '@angular/core';
import { Framework } from '@ajsf/core';
import { Bootstrap4FrameworkComponent } from './bootstrap4-framework.component';
// Bootstrap 4 Framework
// https://github.com/ng-bootstrap/ng-bootstrap
export class Bootstrap4Framework extends Framework {
    constructor() {
        super(...arguments);
        this.name = 'bootstrap-4';
        this.framework = Bootstrap4FrameworkComponent;
        this.stylesheets = [
            '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        ];
        this.scripts = [
            '//code.jquery.com/jquery-3.3.1.slim.min.js',
            '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
            '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        ];
    }
}
Bootstrap4Framework.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwNC5mcmFtZXdvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWJvb3RzdHJhcDQvc3JjL2xpYi9ib290c3RyYXA0LmZyYW1ld29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFOUUsd0JBQXdCO0FBQ3hCLCtDQUErQztBQUcvQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUztJQURsRDs7UUFFRSxTQUFJLEdBQUcsYUFBYSxDQUFDO1FBRXJCLGNBQVMsR0FBRyw0QkFBNEIsQ0FBQztRQUV6QyxnQkFBVyxHQUFHO1lBQ1osb0VBQW9FO1NBQ3JFLENBQUM7UUFFRixZQUFPLEdBQUc7WUFDUiw0Q0FBNEM7WUFDNUMscUVBQXFFO1lBQ3JFLGtFQUFrRTtTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBZkEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZyYW1ld29ya30gZnJvbSAnQGFqc2YvY29yZSc7XG5pbXBvcnQge0Jvb3RzdHJhcDRGcmFtZXdvcmtDb21wb25lbnR9IGZyb20gJy4vYm9vdHN0cmFwNC1mcmFtZXdvcmsuY29tcG9uZW50JztcblxuLy8gQm9vdHN0cmFwIDQgRnJhbWV3b3JrXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwNEZyYW1ld29yayBleHRlbmRzIEZyYW1ld29yayB7XG4gIG5hbWUgPSAnYm9vdHN0cmFwLTQnO1xuXG4gIGZyYW1ld29yayA9IEJvb3RzdHJhcDRGcmFtZXdvcmtDb21wb25lbnQ7XG5cbiAgc3R5bGVzaGVldHMgPSBbXG4gICAgJy8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzcydcbiAgXTtcblxuICBzY3JpcHRzID0gW1xuICAgICcvL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEuc2xpbS5taW4uanMnLFxuICAgICcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNC43L3VtZC9wb3BwZXIubWluLmpzJyxcbiAgICAnLy9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qcycsXG4gIF07XG59XG4iXX0=