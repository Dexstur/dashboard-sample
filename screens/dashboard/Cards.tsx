import { GiProfit } from "react-icons/gi";
import { CountCard } from "@/components/ui";
import { RiHome2Fill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { useAppSelector } from "@/hooks";

export function DashboardCards() {
  const { totalRevenue, activeOrders, totalUsers, totalProducts, loading } =
    useAppSelector((state) => state.dashboard);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
      <CountCard
        count={totalRevenue}
        title="Total Revenue"
        icon={<GiProfit size={24} />}
        color="secondary"
        loading={loading}
        currency
      />
      <CountCard
        count={activeOrders}
        title="Active Orders"
        icon={<MdDeliveryDining size={20} />}
        color="tertiary"
        loading={loading}
      />
      <CountCard
        count={totalUsers}
        title="Total Users"
        icon={<FaUsers size={20} />}
        color="primary"
        loading={loading}
      />
      <CountCard
        count={totalProducts}
        title="Total Products"
        icon={<AiFillProduct />}
        color="alt"
        loading={loading}
      />
    </div>
  );
}
