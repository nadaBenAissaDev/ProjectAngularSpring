import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousDomainComponent } from './sous-domain.component';

describe('SousDomainComponent', () => {
  let component: SousDomainComponent;
  let fixture: ComponentFixture<SousDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
