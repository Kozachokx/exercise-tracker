export interface ApiResponse<D> {
  data: D;
  success?: boolean;
  message?: string;
}
