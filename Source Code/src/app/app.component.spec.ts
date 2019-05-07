import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EarthquakeService } from '../services/earthquakeService';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        EarthquakeService
      ]
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Earthquake Analysis'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Earthquake Analysis');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Earthquake Analysis!');
  });

  it('should call the setCenter method', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'setCenter');
    app.setCenter(-15.232, 22);
    fixture.whenStable().then(() => {
      expect(app.setCenter).toHaveBeenCalled();
    });
  }));

  it('should call the ngOnInit method', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'ngOnInit');
    app.ngOnInit();
    fixture.whenStable().then(() => {
      expect(app.ngOnInit).toHaveBeenCalled();
    });
  }));

});
