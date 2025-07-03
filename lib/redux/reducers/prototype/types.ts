type TFilter = {
  page: number;
  limit: number;
};

type PrototypeState = {
  loading: boolean;
  prototypes: TPrototype[];
  selected: TPrototype | null;
  total: number;
  filters: TFilter;
};
