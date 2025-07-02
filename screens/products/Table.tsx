import { useAppDispatch, useAppSelector } from "@/hooks";
import { AppTableHeaderProps } from "@/components/ui/table/types";
import { AppTable } from "@/components";
import { setProductFilters } from "@/lib";
export function ProductsTable() {
  const dispatch = useAppDispatch();
  const { products, loading, total, filters } = useAppSelector(
    (state) => state.product
  );
  const headings: AppTableHeaderProps[] = [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Price",
      key: "price",
      sortable: true,
    },
    {
      title: "Stock",
      key: "stock",
      sortable: true,
    },
    {
      title: "Created",
      key: "createdAt",
      sortable: true,
    },
    {
      title: "Updated",
      key: "updatedAt",
      sortable: true,
    },
  ];
  return (
    <AppTable
      headings={headings}
      data={products}
      loading={loading}
      pageOptions={{
        page: filters.page,
        totalItems: total,
        limit: filters.limit,
        changePage: (page) => {
          dispatch(setProductFilters({ page }));
        },
      }}
    />
  );
}
