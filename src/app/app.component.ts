import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanelBarItemModel, PanelBarStateChangeEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'my-app',
    styles: [`
        .layout {
            display: table-cell;
            display: flex;
            width: 100%;
        }
        .navigation-pane {
            min-width: 20%;
            max-width: 20%;
        }
        .content-pane {
            padding-left: 10pt;
        }
    `],
    template: `
    <div class="layout">
        <div class="navigation-pane">
            <kendo-panelbar (stateChange)="stateChange($event)" [selectable]="false">
                <kendo-panelbar-item
                    *ngFor="let route of router.config"
                    [id]="route.path"
                    [title]="route.path ? route.path : 'home'"
                    [selected]="route.path === selectedId">
                    <kendo-panelbar-item
                        *ngFor="let child of route.children"
                        [title]="child?.path || 'about'"
                        [id]="route.path + '/' + child?.path"
                        [selected]="route.path + '/' + child?.path === selectedId"
                    >
                    </kendo-panelbar-item>
                </kendo-panelbar-item>
            </kendo-panelbar>
        </div>
        <div class="content-pane">
            <router-outlet></router-outlet>
        </div>
    </div>
    `
})
export class AppComponent {
    public router: Router;
    public selectedId = '';

    constructor(router: Router) {
        this.router = router;
    }

    public stateChange(data: PanelBarStateChangeEvent): boolean {
        const focusedEvent: PanelBarItemModel = data.items.filter(item => item.focused === true)[0];

        if (focusedEvent.id !== 'info') {
           this.selectedId = focusedEvent.id;
           this.router.navigate(['/' + focusedEvent.id]);
        }

        return false;
    }
}
