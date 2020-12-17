import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePuzzleComponent } from './tile-puzzle.component';

describe('TilePuzzleComponent', () => {
  let component: TilePuzzleComponent;
  let fixture: ComponentFixture<TilePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
