import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ShoeFilters, ShoeResponse, Shoe } from '@nabz/shoes/shared/types';

const BASE_URL = 'https://api.thesneakerdatabase.com/v1';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  private filterSubject = new BehaviorSubject<Partial<ShoeFilters>>({ limit: '10', releaseYear: '2019' });
  private shoeCache = new Map<string, Shoe>();

  filters$ = this.filterSubject.asObservable();

  shoes$: Observable<Shoe[]> = this.filters$.pipe(
    switchMap((filters: ShoeFilters) =>
      this.http.get<ShoeResponse>(`${BASE_URL}/sneakers`, { params: { ...filters } })
    ),
    map((response) => response.results),
    map((shoes) => shoes.filter((shoe) => shoe.media.imageUrl !== null))
  );

  constructor(private http: HttpClient) {}

  onFilterChange(filters: Partial<ShoeFilters>) {
    const validFilters = this.filterNonNull(filters);
    this.filterSubject.next(validFilters);
  }

  filterNonNull(filters: Partial<ShoeFilters>): Partial<ShoeFilters> {
    return Object.keys(filters).reduce((obj, currKey) => {
      if (filters[currKey]) {
        obj[currKey] = obj[currKey] || filters[currKey];
      }
      return obj;
    }, {});
  }

  getShoe(shoeId: string): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(`${BASE_URL}/sneakers/${shoeId}`);
  }
}
