import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Vehicle, VehicleResponse } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private url = 'https://swapi.py4e.com/api/vehicles';
  http = inject(HttpClient);

  // Fetching vehicle list data
  private vehicles$ = this.http
    .get<VehicleResponse>(this.url)
    .pipe(map((data) => data.results));

  // Expose signals from this service
  vehicles = toSignal(this.vehicles$, { initialValue: [] as Vehicle[] });

  selectedVehicle = signal<Vehicle | undefined>(undefined);

  vehicleSelected(vehicleName: string) {
    const foundVehicle = this.vehicles().find((v) => v.name === vehicleName);
    this.selectedVehicle.set(foundVehicle);
  }

  constructor() {}
}
