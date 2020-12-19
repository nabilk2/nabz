import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ShoeFilters } from '../types/shoe-filters';
import { Shoe, ShoeResponse } from '../types/shoes';

const BASE_URL = 'https://api.thesneakerdatabase.com/v1';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private filterSubject = new BehaviorSubject<ShoeFilters>({ limit: '10', releaseYear: '2019' });

  filters$ = this.filterSubject.asObservable();

  shoes$: Observable<Shoe[]> = this.filters$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((filters: ShoeFilters) => 
      this.http.get<ShoeResponse>(`${BASE_URL}/sneakers`, { params: { ...filters } })
    ),
    map(response => response.results),
    map(shoes => shoes.filter(shoe => shoe.media.imageUrl !== null))
  )

  constructor(private http: HttpClient) {}

  onFilterChange(filters: Partial<ShoeFilters>) {
    const validFilters = this.filterNonNull(filters);
    this.filterSubject.next({
      ...this.filterSubject.value,
      ...validFilters
    });
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
