import { auth } from "@/auth";
import Landing from "@/components/Landing";
import CardSumary from "@/components/CardSumary/CardSumary";

import { dataCardsSummary } from "@/components/CardSumary/CardSumary.data";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <>
      {session ? (
        <div>
          <h2 className="font-poppins mb-3">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
            {dataCardsSummary.map((card, index) => (
              <CardSumary key={index} {...card} />
            ))}
          </div>
        </div>
      ) : (
        <Landing />
      )}{" "}
    </>
  );
}
