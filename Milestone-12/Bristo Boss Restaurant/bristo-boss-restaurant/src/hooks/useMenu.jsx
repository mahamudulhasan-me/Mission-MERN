import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    data: menu = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(`https://bristo-boss-server-psi.vercel.app/menu`);
      return res.json();
    },
  });
  return [menu, loader, refetch];
};
export default useMenu;
