import { PaginationProps } from "../pagination/types";
import { TableEntryDisplay } from "./data";
import { AppPagination } from "../pagination";

export function AppTableFooter(props: PaginationProps) {
  return (
    <div className="flex items-center p-4 w-full justify-between">
      <TableEntryDisplay {...props} />
      <AppPagination {...props} />
    </div>
  );
}
