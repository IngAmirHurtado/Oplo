import { Skeleton } from "@/components/ui/skeleton"

const MessageSkeleton = () => {

  console.log('holaa')
  return (
    <div className="flex w-full h-full justify-end items-end gap-3">
      <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[100px] w-[170px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[170]" />
      </div>
    </div>
    <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  )
}

export default MessageSkeleton
