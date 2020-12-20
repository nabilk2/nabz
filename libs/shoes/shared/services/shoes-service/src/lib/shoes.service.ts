import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  ShoeFilters,
  ShoeResponse,
  Shoe
} from '@nabz/shoes/shared/types';
import { ShoesServiceModule } from './shoes-service.module';

const BASE_URL = 'https://api.thesneakerdatabase.com/v1';

@Injectable({
  providedIn: ShoesServiceModule
})
export class ShoesService {
  private filterSubject = new BehaviorSubject<Partial<ShoeFilters>>({ limit: '10', releaseYear: '2019' });

  filters$ = this.filterSubject.asObservable();

  shoes$: Observable<Shoe[]> = this.filters$.pipe(
    switchMap((filters: ShoeFilters) => 
      this.http.get<ShoeResponse>(`${BASE_URL}/sneakers`, { params: { ...filters } })
    ),
    map(response => response.results),
    map(shoes => shoes.filter(shoe => shoe.media.imageUrl !== null))
  )

  constructor(private http: HttpClient) {
    console.log('construct');
  }

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
}
