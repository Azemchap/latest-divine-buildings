'use client'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface RatingProps {
    rate: number
    count: number
}

export default function PlanRating({ rate, count }: RatingProps) {
    return (
        <div className="mt-1 text-sm text-gray-500 flex gap-2 items-center">
            <Rating style={{ maxWidth: 100, }} value={rate} readOnly />
            {count} reviews
        </div>
    )
}
