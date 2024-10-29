
import PlanItem from "@/components/plans/PlanItem"
import Title from "@/components/Title"
import { PlanInterface } from "@/lib/interface"
import { client } from "@/sanity/lib/client"


async function getPlansByCategory(category: string) {
  const query =
    ` *[_type == "plan" && references(*[_type == "category" && slug.current == "${category}"]._id)] {
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
      }`

  const data = await client.fetch(query)
  return data
}

export const revalidate = 60;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const slug = (await params).slug

  // const plans: Array<PlanInterface> = await getPlansByCategory()
  const plans: Array<PlanInterface> = await getPlansByCategory(slug)
  console.log(plans)

  return (
    <section className=''>
      <div className='container mx-auto p-4 '>
        <Title title={`#${slug}`}  />
        <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan) => (
            <PlanItem key={plan._id} plan={plan} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default page