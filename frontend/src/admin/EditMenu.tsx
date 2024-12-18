/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MenuFormSchema } from "@/schema/menuSchema"
import { Label } from "@radix-ui/react-menubar"
import { Loader2 } from "lucide-react"
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"


const EditMenu = ({selectedMenu,editOpen,setEditOpen}:{selectedMenu:MenuFormSchema,editOpen:boolean,setEditOpen:Dispatch<SetStateAction<boolean>>}) => {

  const [input,setInput] = useState<MenuFormSchema>({
          name:"",
          description:"",
          price:0,
          image:undefined
      })
  
  const loading=false
  const changeEventHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value,type}=e.target
    setInput({...input,[name]:type==='number'?Number(value):value})
  }
  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    setInput({
      name:selectedMenu?.name || "",
      description:selectedMenu?.description || "",
      price:selectedMenu?.price || 0,
      image:undefined
    })
  },[selectedMenu])

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>edit Menu</DialogTitle>
          <DialogDescription>Update your name to keep your offering fresh and exciting!</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={submitHandler} className="space-y-4">
                    <div>
                        <Label>Name</Label>
                        <Input type="text" placeholder="enter menu name" value={input.name} onChange={changeEventHandler} name="name"/>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input type="text" placeholder="enter menu description" value={input.description} onChange={changeEventHandler} name="description"/>
                    </div>
                    <div>
                        <Label>Price in (Rupees)</Label>
                        <Input type="number" placeholder="enter menu price" value={input.price} onChange={changeEventHandler} name="price"/>
                    </div>
                    <div>
                        <Label>Upload Menu Image</Label>
                        <Input type="file" placeholder="enter menu name" onChange={(e)=>setInput({...input,image:e.target.files?.[0]||undefined})} name="image"/>
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
  )
}

export default EditMenu