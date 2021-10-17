import serializeOnlyGetters from '../json-utils';
import { PageRequest } from './page-request';

export class Page<T> {
  constructor(
    private _data: T[],
    private _totalElements: number,
    private _meta: PageRequest,
  ) {}
  
  public get data(): T[] {
    return this._data;
  }

  public get totalElements(): number {
    return this._totalElements;
  }

  public get meta(): PageRequest {
    return this._meta;
  }

  public get numberOfElements(): number {
    return this._data.length;
  }

  public get first(): boolean {
    return this.meta.page === 0;
  }

  public get last(): boolean {
    return this.meta.page === this.totalPages - 1;
  }

  public get totalPages(): number {
    if (this.totalElements % this.meta.size === 0)
      return this.totalElements / this.meta.size;

    return Math.floor(this.totalElements / this.meta.size) + 1;
  }

  toJSON() {
    return serializeOnlyGetters(this);
  }
}
