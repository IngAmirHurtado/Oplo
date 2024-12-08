import { Skeleton } from "@/components/ui/skeleton"
 
const SkeletonUsersWithChat = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[80px]" />
        <Skeleton className="h-3 w-[130px]" />
      </div>
    </div>
  )
}

export default SkeletonUsersWithChat