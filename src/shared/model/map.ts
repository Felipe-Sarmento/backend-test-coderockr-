export interface Mapper<T, U> {
  mapFrom(param: T): U;
  mapTo(param: U): T;
}
