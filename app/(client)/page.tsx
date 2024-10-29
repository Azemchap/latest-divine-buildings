import PlanItem from "@/components/plans/PlanItem"
import Title from "@/components/Title"
import { PlanInterface } from "@/lib/interface"
import { PLANS_QUERY } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import { Key } from "react"


export default async function Homepage() {

  const plans: PlanInterface[] = await client.fetch(PLANS_QUERY)

  // console.log(plans)

  return (
    <main className="">
      <section className="container mx-auto p-4 text-center flex justify-center flex-col gap-4">
        <Title title="Top House plans" />
        <section className="grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan, index: Key) => (
            <div key={index}>
              <PlanItem plan={plan} />
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}
