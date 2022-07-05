import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFenceTypeComponent } from './edit-fence-type.component';

describe('EditFenceTypeComponent', () => {
  let component: EditFenceTypeComponent;
  let fixture: ComponentFixture<EditFenceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFenceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFenceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
