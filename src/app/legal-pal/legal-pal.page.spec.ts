import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalPalPage } from './legal-pal.page';

describe('LegalPalPage', () => {
  let component: LegalPalPage;
  let fixture: ComponentFixture<LegalPalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LegalPalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
