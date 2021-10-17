import serializeOnlyGetters from '../json-utils';
import { Sort } from './sort';

export class PageRequest {
  private _page: number;
  private _size: number;

  constructor(page: number, size: number, private _sort?: Sort) {
    if (page < 0 || !Number.isInteger(page))
      throw new Error(
        'Page must be an integer equal or greater than 0. ' +
          page +
          ' is invalid',
      );

    if (size <= 0 || !Number.isInteger(size))
      throw new Error(
        'Page size must be a positive integer. ' + size + ' is invalid',
      );

    this._page = page;
    this._size = size;
  }

  public static of(page: number, size: number, sort?: Sort): PageRequest {
    return new PageRequest(page, size, sort);
  }

  public get page(): number {
    return this._page;
  }

  public get size(): number {
    return this._size;
  }

  public get sort(): Sort {
    return this._sort;
  }

  public get offset(): number {
    return this.size * this.page;
  }

  public get sorted(): boolean {
    return !!this._sort;
  }

  toJSON() {
    return serializeOnlyGetters(this);
  }

}
