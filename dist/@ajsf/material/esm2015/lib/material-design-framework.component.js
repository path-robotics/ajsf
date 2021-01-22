import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { isDefined, JsonSchemaFormService } from '@ajsf/core';
import cloneDeep from 'lodash/cloneDeep';
export class MaterialDesignFrameworkComponent {
    constructor(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.parentArray = null;
        this.isOrderable = false;
        this.dynamicTitle = null;
    }
    get showRemoveButton() {
        if (!this.layoutNode || !this.widgetOptions.removable ||
            this.widgetOptions.readonly || this.layoutNode.type === '$ref') {
            return false;
        }
        if (this.layoutNode.recursiveReference) {
            return true;
        }
        if (!this.layoutNode.arrayItem || !this.parentArray) {
            return false;
        }
        // If array length <= minItems, don't allow removing any items
        return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
            // For removable list items, allow removing any item
            this.layoutNode.arrayItemType === 'list' ? true :
                // For removable tuple items, only allow removing last item in list
                this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
    }
    ngOnInit() {
        this.initializeFramework();
    }
    ngOnChanges() {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
        if (this.dynamicTitle) {
            this.updateTitle();
        }
    }
    initializeFramework() {
        if (this.layoutNode) {
            this.options = cloneDeep(this.layoutNode.options || {});
            this.widgetLayoutNode = Object.assign(Object.assign({}, this.layoutNode), { options: cloneDeep(this.layoutNode.options || {}) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            if (isDefined(this.widgetOptions.minimum) &&
                isDefined(this.widgetOptions.maximum) &&
                this.widgetOptions.multipleOf >= 1) {
                this.layoutNode.type = 'range';
            }
            if (!['$ref', 'advancedfieldset', 'authfieldset', 'button', 'card',
                'checkbox', 'expansion-panel', 'help', 'message', 'msg', 'section',
                'submit', 'tabarray', 'tabs'].includes(this.layoutNode.type) &&
                /{{.+?}}/.test(this.widgetOptions.title || '')) {
                this.dynamicTitle = this.widgetOptions.title;
                this.updateTitle();
            }
            if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
                this.parentArray = this.jsf.getParentNode(this);
                if (this.parentArray) {
                    this.isOrderable =
                        this.parentArray.type.slice(0, 3) !== 'tab' &&
                            this.layoutNode.arrayItemType === 'list' &&
                            !this.widgetOptions.readonly &&
                            this.parentArray.options.orderable;
                }
            }
            this.frameworkInitialized = true;
        }
        else {
            this.options = {};
        }
    }
    updateTitle() {
        this.widgetLayoutNode.options.title = this.jsf.parseText(this.dynamicTitle, this.jsf.getFormControlValue(this), this.jsf.getFormControlGroup(this).value, this.dataIndex[this.dataIndex.length - 1]);
    }
    removeItem() {
        this.jsf.removeItem(this);
    }
}
MaterialDesignFrameworkComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'material-design-framework',
                template: "<div\n  [class.array-item]=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"\n  [orderable]=\"isOrderable\"\n  [dataIndex]=\"dataIndex\"\n  [layoutIndex]=\"layoutIndex\"\n  [layoutNode]=\"widgetLayoutNode\">\n  <svg *ngIf=\"showRemoveButton\"\n       xmlns=\"http://www.w3.org/2000/svg\"\n       height=\"18\" width=\"18\" viewBox=\"0 0 24 24\"\n       class=\"close-button\"\n       (click)=\"removeItem()\">\n    <path\n      d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\"/>\n  </svg>\n  <select-widget-widget\n    [dataIndex]=\"dataIndex\"\n    [layoutIndex]=\"layoutIndex\"\n    [layoutNode]=\"widgetLayoutNode\"></select-widget-widget>\n</div>\n<div class=\"spacer\" *ngIf=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"></div>\n",
                styles: [".array-item{border-radius:2px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);padding:6px;position:relative;transition:all .28s cubic-bezier(.4,0,.2,1)}.close-button{cursor:pointer;fill:rgba(0,0,0,.4);position:absolute;right:6px;top:6px;visibility:hidden;z-index:500}.close-button:hover{fill:rgba(0,0,0,.8)}.array-item:hover>.close-button{visibility:visible}.spacer{margin:6px 0}[draggable=true]:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);cursor:move;z-index:10}[draggable=true].drag-target-top{box-shadow:0 -2px 0 #000;position:relative;z-index:20}[draggable=true].drag-target-bottom{box-shadow:0 2px 0 #000;position:relative;z-index:20}"]
            },] }
];
MaterialDesignFrameworkComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: JsonSchemaFormService }
];
MaterialDesignFrameworkComponent.propDecorators = {
    layoutNode: [{ type: Input }],
    layoutIndex: [{ type: Input }],
    dataIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLW1hdGVyaWFsL3NyYy9saWIvbWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxTQUFTLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDNUQsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFRekMsTUFBTSxPQUFPLGdDQUFnQztJQWMzQyxZQUNVLGNBQWlDLEVBQ2pDLEdBQTBCO1FBRDFCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxRQUFHLEdBQUgsR0FBRyxDQUF1QjtRQWZwQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFLN0IsZ0JBQVcsR0FBUSxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBVyxJQUFJLENBQUM7SUFTNUIsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDOUQ7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUks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SUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLOzRCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsS0FBSyxNQUFNOzRCQUN4QyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTs0QkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUN0QzthQUNGO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUN0RCxJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLHUxQkFBeUQ7O2FBRTFEOzs7WUFUTyxpQkFBaUI7WUFDTixxQkFBcUI7Ozt5QkFtQnJDLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc0RlZmluZWQsIEpzb25TY2hlbWFGb3JtU2VydmljZX0gZnJvbSAnQGFqc2YvY29yZSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdGVyaWFsLWRlc2lnbi1mcmFtZXdvcmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdGVyaWFsLWRlc2lnbi1mcmFtZXdvcmsuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEZXNpZ25GcmFtZXdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGZyYW1ld29ya0luaXRpYWxpemVkID0gZmFsc2U7XG4gIGlucHV0VHlwZTogc3RyaW5nO1xuICBvcHRpb25zOiBhbnk7IC8vIE9wdGlvbnMgdXNlZCBpbiB0aGlzIGZyYW1ld29ya1xuICB3aWRnZXRMYXlvdXROb2RlOiBhbnk7IC8vIGxheW91dE5vZGUgcGFzc2VkIHRvIGNoaWxkIHdpZGdldFxuICB3aWRnZXRPcHRpb25zOiBhbnk7IC8vIE9wdGlvbnMgcGFzc2VkIHRvIGNoaWxkIHdpZGdldFxuICBmb3JtQ29udHJvbDogYW55ID0gbnVsbDtcbiAgcGFyZW50QXJyYXk6IGFueSA9IG51bGw7XG4gIGlzT3JkZXJhYmxlID0gZmFsc2U7XG4gIGR5bmFtaWNUaXRsZTogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgbGF5b3V0Tm9kZTogYW55O1xuICBASW5wdXQoKSBsYXlvdXRJbmRleDogbnVtYmVyW107XG4gIEBJbnB1dCgpIGRhdGFJbmRleDogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBqc2Y6IEpzb25TY2hlbWFGb3JtU2VydmljZVxuICApIHtcbiAgfVxuXG4gIGdldCBzaG93UmVtb3ZlQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5sYXlvdXROb2RlIHx8ICF0aGlzLndpZGdldE9wdGlvbnMucmVtb3ZhYmxlIHx8XG4gICAgICB0aGlzLndpZGdldE9wdGlvbnMucmVhZG9ubHkgfHwgdGhpcy5sYXlvdXROb2RlLnR5cGUgPT09ICckcmVmJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXlvdXROb2RlLnJlY3Vyc2l2ZVJlZmVyZW5jZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5sYXlvdXROb2RlLmFycmF5SXRlbSB8fCAhdGhpcy5wYXJlbnRBcnJheSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBJZiBhcnJheSBsZW5ndGggPD0gbWluSXRlbXMsIGRvbid0IGFsbG93IHJlbW92aW5nIGFueSBpdGVtc1xuICAgIHJldHVybiB0aGlzLnBhcmVudEFycmF5Lml0ZW1zLmxlbmd0aCAtIDEgPD0gdGhpcy5wYXJlbnRBcnJheS5vcHRpb25zLm1pbkl0ZW1zID8gZmFsc2UgOlxuICAgICAgLy8gRm9yIHJlbW92YWJsZSBsaXN0IGl0ZW1zLCBhbGxvdyByZW1vdmluZyBhbnkgaXRlbVxuICAgICAgdGhpcy5sYXlvdXROb2RlLmFycmF5SXRlbVR5cGUgPT09ICdsaXN0JyA/IHRydWUgOlxuICAgICAgICAvLyBGb3IgcmVtb3ZhYmxlIHR1cGxlIGl0ZW1zLCBvbmx5IGFsbG93IHJlbW92aW5nIGxhc3QgaXRlbSBpbiBsaXN0XG4gICAgICAgIHRoaXMubGF5b3V0SW5kZXhbdGhpcy5sYXlvdXRJbmRleC5sZW5ndGggLSAxXSA9PT0gdGhpcy5wYXJlbnRBcnJheS5pdGVtcy5sZW5ndGggLSAyO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRnJhbWV3b3JrKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuZnJhbWV3b3JrSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUZyYW1ld29yaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5keW5hbWljVGl0bGUpIHtcbiAgICAgIHRoaXMudXBkYXRlVGl0bGUoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplRnJhbWV3b3JrKCkge1xuICAgIGlmICh0aGlzLmxheW91dE5vZGUpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IGNsb25lRGVlcCh0aGlzLmxheW91dE5vZGUub3B0aW9ucyB8fCB7fSk7XG4gICAgICB0aGlzLndpZGdldExheW91dE5vZGUgPSB7XG4gICAgICAgIC4uLnRoaXMubGF5b3V0Tm9kZSxcbiAgICAgICAgb3B0aW9uczogY2xvbmVEZWVwKHRoaXMubGF5b3V0Tm9kZS5vcHRpb25zIHx8IHt9KVxuICAgICAgfTtcbiAgICAgIHRoaXMud2lkZ2V0T3B0aW9ucyA9IHRoaXMud2lkZ2V0TGF5b3V0Tm9kZS5vcHRpb25zO1xuICAgICAgdGhpcy5mb3JtQ29udHJvbCA9IHRoaXMuanNmLmdldEZvcm1Db250cm9sKHRoaXMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGlzRGVmaW5lZCh0aGlzLndpZGdldE9wdGlvbnMubWluaW11bSkgJiZcbiAgICAgICAgaXNEZWZpbmVkKHRoaXMud2lkZ2V0T3B0aW9ucy5tYXhpbXVtKSAmJlxuICAgICAgICB0aGlzLndpZGdldE9wdGlvbnMubXVsdGlwbGVPZiA+PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5sYXlvdXROb2RlLnR5cGUgPSAncmFuZ2UnO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICFbJyRyZWYnLCAnYWR2YW5jZWRmaWVsZHNldCcsICdhdXRoZmllbGRzZXQnLCAnYnV0dG9uJywgJ2NhcmQnLFxuICAgICAgICAgICdjaGVja2JveCcsICdleHBhbnNpb24tcGFuZWwnLCAnaGVscCcsICdtZXNzYWdlJywgJ21zZycsICdzZWN0aW9uJyxcbiAgICAgICAgICAnc3VibWl0JywgJ3RhYmFycmF5JywgJ3RhYnMnXS5pbmNsdWRlcyh0aGlzLmxheW91dE5vZGUudHlwZSkgJiZcbiAgICAgICAgL3t7Lis/fX0vLnRlc3QodGhpcy53aWRnZXRPcHRpb25zLnRpdGxlIHx8ICcnKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZHluYW1pY1RpdGxlID0gdGhpcy53aWRnZXRPcHRpb25zLnRpdGxlO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxheW91dE5vZGUuYXJyYXlJdGVtICYmIHRoaXMubGF5b3V0Tm9kZS50eXBlICE9PSAnJHJlZicpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRBcnJheSA9IHRoaXMuanNmLmdldFBhcmVudE5vZGUodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudEFycmF5KSB7XG4gICAgICAgICAgdGhpcy5pc09yZGVyYWJsZSA9XG4gICAgICAgICAgICB0aGlzLnBhcmVudEFycmF5LnR5cGUuc2xpY2UoMCwgMykgIT09ICd0YWInICYmXG4gICAgICAgICAgICB0aGlzLmxheW91dE5vZGUuYXJyYXlJdGVtVHlwZSA9PT0gJ2xpc3QnICYmXG4gICAgICAgICAgICAhdGhpcy53aWRnZXRPcHRpb25zLnJlYWRvbmx5ICYmXG4gICAgICAgICAgICB0aGlzLnBhcmVudEFycmF5Lm9wdGlvbnMub3JkZXJhYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZnJhbWV3b3JrSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUaXRsZSgpIHtcbiAgICB0aGlzLndpZGdldExheW91dE5vZGUub3B0aW9ucy50aXRsZSA9IHRoaXMuanNmLnBhcnNlVGV4dChcbiAgICAgIHRoaXMuZHluYW1pY1RpdGxlLFxuICAgICAgdGhpcy5qc2YuZ2V0Rm9ybUNvbnRyb2xWYWx1ZSh0aGlzKSxcbiAgICAgIHRoaXMuanNmLmdldEZvcm1Db250cm9sR3JvdXAodGhpcykudmFsdWUsXG4gICAgICB0aGlzLmRhdGFJbmRleFt0aGlzLmRhdGFJbmRleC5sZW5ndGggLSAxXVxuICAgICk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMuanNmLnJlbW92ZUl0ZW0odGhpcyk7XG4gIH1cbn1cbiJdfQ==