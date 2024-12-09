import { Skeleton } from "@/components/ui/skeleton"
 
const ChatCardsSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
     
        <Skeleton className="h-10 w-[180px]" />
       
    
    </div>
  )
}

export default ChatCardsSkeleton