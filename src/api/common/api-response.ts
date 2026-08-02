export interface ApiResponse<T> {
  status: string;
  code: number;
  message: string | null;
  data: T;
}
