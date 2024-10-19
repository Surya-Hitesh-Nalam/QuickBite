import { useParams } from "react-router-dom"
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";

const SearchPage = () => {
    const params = useParams();
    const [searchQuery,setSearchQuery] = useState<string>("")
  return (
    <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
            <FilterPage/>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                <Input type="text"
                value={searchQuery}
                placeholder="Search by restaurant & cuisines"
                onChange={(e)=>setSearchQuery(e.target.value)} />
                <Button className="bg-orange hover:bg-hoverOrange">Search</Button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage