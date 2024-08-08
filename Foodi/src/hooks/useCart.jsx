import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useQueries, useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/cartItems?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return response.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
