import { TestBed, inject, async } from '@angular/core/testing';
import { EarthquakeService } from './earthquakeService'
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EarthquakeService', () => {
  let injectableService: Injectable;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [Injectable,EarthquakeService]
    });
    injectableService = TestBed.get(Injectable);
  });

  it('should be created', inject(
    [Injectable], (injectService: Injectable) => {
      expect(injectService).toBe(injectableService);
    }
  ));

});
