type AppResponse<T> = {
  message: string;
  data: T;
};

type AppListResponse<T> = {
  message: string;
  total: number;
  page: number;
  limit: number;
  data: T[];
};
