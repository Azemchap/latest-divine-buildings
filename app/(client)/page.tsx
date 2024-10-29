import PlanItem from "@/components/plans/PlanItem"
import Title from "@/components/Title"
import { PlanInterface } from "@/lib/interface"
import { client } from "@/sanity/lib/client"


async function getPlans() {
  const query =
    ` *[_type == "plan"] | order(createdAt desc) {
            name,
            slug,
            description,
            category[]->{
            _id,
            slug,
            name
            },
            price,
            rating,
            numReview,
            createdAt,
            images,
            body,
        }`

  const data = await client.fetch(query)
  return data
}

export default async function Homepage() {
  const plans: PlanInterface[] = await getPlans()

  return (
    <main className="">
      <section className="container mx-auto p-4 text-center flex justify-center flex-col gap-4">
        <Title title="Top House plans" />
        <section className="grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan, index) => (
            <div key={index}>
              <PlanItem plan={plan} />
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}
