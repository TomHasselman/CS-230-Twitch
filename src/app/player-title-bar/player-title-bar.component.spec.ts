import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTitleBarComponent } from './player-title-bar.component';

describe('PlayerTitleBarComponent', () => {
  let component: PlayerTitleBarComponent;
  let fixture: ComponentFixture<PlayerTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTitleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
