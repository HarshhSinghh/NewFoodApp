import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const data = await axiosPublic.get("/menu");
      console.log(res.data);
      return res.data; //--------------->>> it should be data.json()
    },
    // This is Harsh
  });

  return [menu, loading, refetch];

};
// Jo bhi krna hai jaldi krte hai aur baad main hm aage bdenge

export default useMenu;
