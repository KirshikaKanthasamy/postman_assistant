/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddletterComponent } from './addletter.component';

describe('AddletterComponent', () => {
  let component: AddletterComponent;
  let fixture: ComponentFixture<AddletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
