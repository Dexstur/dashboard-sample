"use client";
import { PrototypeListResponse } from "@/responses";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { apiFetch } from "@/requests";
import {
  setPrototypeFilters,
  setLoadingPrototypes,
  setPrototypeTotal,
  setPrototypes,
} from "@/lib";
import { dtoToQuery } from "@/requests/utils";

export function listPrototypes() {
  const dispatch = useAppDispatch();
  const baseUrl = "/api/product/prototype";
  const { filters } = useAppSelector((state) => state.product);
  const { search } = useAppSelector((state) => state.global);
  const [listUrl, setListUrl] = useState(baseUrl);
  const [change, setChange] = useState(0);
  const { data, error } = useSWR(listUrl, apiFetch);

  useEffect(() => {
    dispatch(setPrototypeFilters({ page: 1 }));
  }, [search]);

  useEffect(() => {
    dispatch(setLoadingPrototypes(true));
    const query = dtoToQuery({ ...filters, search });
    setListUrl(`${baseUrl}?${query}`);
    setChange((prev) => prev + 1);
  }, [filters, search]);

  useEffect(() => {
    if (data) {
      const response: PrototypeListResponse = data;
      dispatch(setPrototypes(response.data));
      dispatch(setPrototypeTotal(response.total));
      dispatch(setLoadingPrototypes(false));
    }
    if (error) {
      console.error(error);
      dispatch(setLoadingPrototypes(false));
    }
  }, [data, error, change]);
}
