export interface VehicleResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[]
}

export interface Vehicle {
  name: string;
  cost_in_credits: string
  price?: number;
}

export interface Film {
  title: string;
}
