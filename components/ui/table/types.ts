import { PaginationProps } from "../pagination/types";

export type AppTableHeaderProps = {
  title: string;
  key: string;
  sortable?: boolean;
  body?: (args: any) => React.ReactNode;
  node?: React.ReactNode;
};

export type AppTableProps<T> = {
  data: T[];
  headings: AppTableHeaderProps[];
  loading?: boolean;
  pageOptions: PaginationProps;
  rowClick?: (args: T) => void;
};

export type TableSortProps = {
  sorted?: boolean;
  sortOrder?: 1 | 0 | -1 | null | undefined;
};
