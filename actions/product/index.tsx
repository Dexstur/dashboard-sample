import { ProductListResponse } from "@/responses";
import { productListRequest } from "@/requests/product";
import { useAppDispatch } from "@/hooks";
import {
  setProductFilters,
  setProductLoading,
  setProducts,
  setProductTotal,
} from "@/lib";
import { useAppSelector } from "@/hooks";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { apiFetch } from "@/requests";
import { dtoToQuery } from "@/requests/utils";

export function listProducts() {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.product);
  const { search } = useAppSelector((state) => state.global);
  const [listUrl, setListUrl] = useState("/api/product");
  const [change, setChange] = useState(0);
  const { data: listData, error: listError } = useSWR(listUrl, apiFetch);
  useEffect(() => {
    dispatch(setProductFilters({ page: 1 }));
  }, [search]);

  useEffect(() => {
    dispatch(setProductLoading(true));
    const query = dtoToQuery({ ...filters, search });
    setListUrl(`/api/product?${query}`);
    setChange((prev) => prev + 1);
  }, [filters, search]);

  useEffect(() => {
    if (listData) {
      const response: ProductListResponse = listData;
      dispatch(setProducts(response.data));
      dispatch(setProductTotal(response.total));
      dispatch(setProductLoading(false));
    }
    if (listError) {
      console.error(listError);
      dispatch(setProductLoading(false));
    }
  }, [listData, listError, change]);
}
