'use client'

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center h-full pt-[96px] px-4 sm:px-6 lg:px-8">
      <div className="z-10 flex-[1.5] lg:flex-[0.6] animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-5/6 mb-8"></div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        </div>
      </div>
      <div className="relative w-64 h-64 lg:w-96 lg:h-96 lg:flex-[0.4] rounded-2xl bg-gray-200 animate-pulse"></div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-lg shadow animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  )
}
