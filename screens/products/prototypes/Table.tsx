import { AppTableHeaderProps } from "@/components/ui/table/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AppTable } from "@/components";
import { setProductFilters } from "@/lib";
import { wordedDate } from "@/utils";

export function PrototypeTable() {
  const dispatch = useAppDispatch();
  const { prototypes, loading, total, filters } = useAppSelector(
    (state) => state.prototype
  );
  const headings: AppTableHeaderProps[] = [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Produced",
      key: "produced",
    },
    {
      title: "Sampled",
      key: "sampled",
    },
    {
      title: "Iterations",
      key: "iterations",
      sortable: true,
    },
    {
      title: "Acceptance",
      key: "acceptance",
      sortable: true,
    },
    {
      title: "Created",
      key: "createdAt",
      sortable: true,
      body: (p: TPrototype) => <span>{wordedDate(p.createdAt)}</span>,
    },
    {
      title: "Updated",
      key: "updatedAt",
      sortable: true,
      body: (p: TPrototype) => <span>{wordedDate(p.updatedAt)}</span>,
    },
  ];

  return (
    <AppTable
      headings={headings}
      data={prototypes}
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
