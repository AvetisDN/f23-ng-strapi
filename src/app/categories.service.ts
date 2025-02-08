import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseUrl = 'http://localhost:1337';

  categories: any = signal([]);

  total = computed(() => {
    let tot = this.categories().length;
    this.categories().forEach((cat: any) => {
      tot += cat.categories.length;
    });
    return tot;
  });

  constructor(private http: HttpClient) {}

  getCategories() {
    if (localStorage.getItem('ng-token')) {
      this.http
        .get(
          `${this.baseUrl}/api/categories?populate[0]=categories&filters[categories][$null]`
        )
        .subscribe({
          next: (data: any) => {
            this.categories.set(data.data);
            // console.log(data);
          },
          error: (e) => {
            this.categories.set([]);
          },
        });
    } else {
      this.categories.set([]);
    }
  }
}
