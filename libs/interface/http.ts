interface ResponseSuccess<T> {
  data: T;
}
export type HttpResponse<T> = ResponseSuccess<T>;
