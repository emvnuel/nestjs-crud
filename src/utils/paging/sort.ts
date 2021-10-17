import serializeOnlyGetters from '../json-utils';

export type SortDirection = 'ASC' | 'DESC';

export class Sort {
  constructor(
    private _orderBy: string = 'name',
    private _direction: SortDirection = 'ASC',
  ) {}

  public static of(orderBy?: string, sortDirection?: SortDirection): Sort {
    return new Sort(orderBy, sortDirection);
  }

  public static ascending(orderBy?: string): Sort {
    return new Sort(orderBy, 'ASC');
  }

  public static descending(orderBy?: string): Sort {
    return new Sort(orderBy, 'DESC');
  }

  public get direction(): SortDirection {
    return this._direction;
  }

  public get orderBy(): string {
    return this._orderBy;
  }

  toJSON() {
    return serializeOnlyGetters(this);
  }
  
}
