import { Building } from "lucide-react"
import { CustomIcon } from "./CustomIcon/CustomIcon"
import CustomersTable from "./CustomersTable"



const LastCustomers = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={Building} />
            <p className="text-xl">Last customers</p>
        </div>
        <div>
          <CustomersTable />
        </div>
    </div>
  )
}

export default LastCustomers