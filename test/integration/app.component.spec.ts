import {
    TestBed
} from '@angular/core/testing';

import { AppComponent } from '../../src/app/app.component';
import {DebugElement} from '@angular/core';

describe('Component: AppComponent', () => {
    let component: AppComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });

        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    it('check h1 is set', () => {

        expect(element.querySelector('h1').innerText).toEqual('Looking good');
    });
});