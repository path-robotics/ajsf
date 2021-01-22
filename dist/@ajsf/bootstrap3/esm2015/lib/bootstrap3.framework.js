import { Injectable } from '@angular/core';
import { Framework } from '@ajsf/core';
import { Bootstrap3FrameworkComponent } from './bootstrap3-framework.component';
// Bootstrap 3 Framework
// https://github.com/valor-software/ng2-bootstrap
export class Bootstrap3Framework extends Framework {
    constructor() {
        super(...arguments);
        this.name = 'bootstrap-3';
        this.framework = Bootstrap3FrameworkComponent;
        this.stylesheets = [
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
        ];
        this.scripts = [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
        ];
    }
}
Bootstrap3Framework.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwMy5mcmFtZXdvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWJvb3RzdHJhcDMvc3JjL2xpYi9ib290c3RyYXAzLmZyYW1ld29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFOUUsd0JBQXdCO0FBQ3hCLGtEQUFrRDtBQUdsRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUztJQURsRDs7UUFFRSxTQUFJLEdBQUcsYUFBYSxDQUFDO1FBRXJCLGNBQVMsR0FBRyw0QkFBNEIsQ0FBQztRQUV6QyxnQkFBVyxHQUFHO1lBQ1osaUVBQWlFO1lBQ2pFLHVFQUF1RTtTQUN4RSxDQUFDO1FBRUYsWUFBTyxHQUFHO1lBQ1IsNERBQTREO1lBQzVELGtFQUFrRTtZQUNsRSwrREFBK0Q7U0FDaEUsQ0FBQztJQUNKLENBQUM7OztZQWhCQSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RnJhbWV3b3JrfSBmcm9tICdAYWpzZi9jb3JlJztcbmltcG9ydCB7Qm9vdHN0cmFwM0ZyYW1ld29ya0NvbXBvbmVudH0gZnJvbSAnLi9ib290c3RyYXAzLWZyYW1ld29yay5jb21wb25lbnQnO1xuXG4vLyBCb290c3RyYXAgMyBGcmFtZXdvcmtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZzItYm9vdHN0cmFwXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb290c3RyYXAzRnJhbWV3b3JrIGV4dGVuZHMgRnJhbWV3b3JrIHtcbiAgbmFtZSA9ICdib290c3RyYXAtMyc7XG5cbiAgZnJhbWV3b3JrID0gQm9vdHN0cmFwM0ZyYW1ld29ya0NvbXBvbmVudDtcblxuICBzdHlsZXNoZWV0cyA9IFtcbiAgICAnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyxcbiAgICAnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzJyxcbiAgXTtcblxuICBzY3JpcHRzID0gW1xuICAgICcvL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjIuNC9qcXVlcnkubWluLmpzJyxcbiAgICAnLy9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnl1aS8xLjEyLjEvanF1ZXJ5LXVpLm1pbi5qcycsXG4gICAgJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2pzL2Jvb3RzdHJhcC5taW4uanMnLFxuICBdO1xufVxuIl19