import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  console.log(loading);
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.uid],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
