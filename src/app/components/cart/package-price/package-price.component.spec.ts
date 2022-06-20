import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePriceComponent } from './package-price.component';

describe('PackagePriceComponent', () => {
  let component: PackagePriceComponent;
  let fixture: ComponentFixture<PackagePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
