
import CardSumary from "@/components/CardSumary/CardSumary";

import { dataCardsSummary } from "@/components/CardSumary/CardSumary.data";
import LastCustomers from "@/components/LastCustomers";

import SalesDistributors from "@/components/SalesDistributors";

export default async function Home() {
  

  return (
    <>
      
        <div>
          <h2 className="font-poppins mb-3">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
            {dataCardsSummary.map((card, index) => (
              <CardSumary key={index} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  mt-12 gap-1">
            <LastCustomers />
            <SalesDistributors />
          </div>
        </div>
      
    </>
  );
}
