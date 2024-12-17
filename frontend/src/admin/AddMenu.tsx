import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Plus } from "lucide-react"
import { useState } from "react"
import EditMenu from "./EditMenu"

const AddMenu = () => {
    const [open,setOpen] = useState<boolean>(false)
    const [selectedMenu,setSelectedMenu] = useState<any>()
    const loading=false
  return (
    <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between">
            <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">Available Menus</h1>
       
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button className="bg-orange hover:bg-hoverOrange"><Plus mr-2/>Add Menu</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add A New Menu
                    </DialogTitle>
                    <DialogDescription>Create a menu that will make your restaurant standout</DialogDescription>
                </DialogHeader>
                <form action="">
                    <div>
                        <Label>Name</Label>
                        <Input type="text" placeholder="enter menu name" name="name"/>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input type="text" placeholder="enter menu description" name="description"/>
                    </div>
                    <div>
                        <Label>Price in (Rupees)</Label>
                        <Input type="text" placeholder="enter menu price" name="price"/>
                    </div>
                    <div>
                        <Label>Upload Menu Image</Label>
                        <Input type="file" placeholder="enter menu name" name="image"/>
                    </div>
                    <DialogFooter>
                        {
                            loading?(
                                <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please Wait</Button>

                            ):(
                                <Button className="bg-orange hover:bg-hoverOrange">Submit</Button>

                            )
                        }
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        </div>
        <div className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
                <img src="https://content.jdmagicbox.com/comp/def_content/pure_veg_restaurants/default-pure-veg-restaurants-5.jpg?clr=#5c3b0a" 
                alt="" 
                className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
                />
                <div className="flex-1">
                    <h1 className="text-lg font-semibold text-gray-800">Biriyani</h1>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h2 className="text-md font-semibold mt-2">Price:<span className="text-[#D19254]">80</span></h2>
                </div>
                <Button size={'sm'} className="bg-orange hover:bg-hoverOrange mt-2">Edit</Button>
            </div>
        </div>
        <EditMenu selectedMenu={selectedMenu}/>
    </div>
  )
}

export default AddMenu