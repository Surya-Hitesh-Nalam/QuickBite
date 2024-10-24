import React, { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


const CheckOutConfirmPage = ({open,setOpen}:{open:boolean,setOpen: Dispatch<SetStateAction<boolean>>}) => {

    
    const [input,setInput] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
        city:"",
        country:""
    })
    const changeEventHandler=(e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setInput({...input,[name]:value})
    }

    const checkOutHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogTitle className="font-semibold">Reviw your order</DialogTitle>
            <DialogDescription className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi nisi esse, temporibus optio libero voluptate error tempore omnis nulla.</DialogDescription>
            <form onSubmit={checkOutHandler} className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
                <div >
                    <Label>Full Name</Label>
                    <Input type="text" name="name" value={input.name} onChange={changeEventHandler}/>
                </div>
                <div >
                    <Label>Email</Label>
                    <Input type="text" name="email" value={input.email} onChange={changeEventHandler}/>
                </div>
                <div >
                    <Label>Contact</Label>
                    <Input type="text" name="contact" value={input.contact} onChange={changeEventHandler}/>
                </div>
                <div >
                    <Label>Address</Label>
                    <Input type="text" name="address" value={input.address} onChange={changeEventHandler}/>
                </div>
                <div >
                    <Label>City</Label>
                    <Input type="text" name="city" value={input.city} onChange={changeEventHandler}/>
                </div>
                <div >
                    <Label>Country</Label>
                    <Input type="text" name="country" value={input.country} onChange={changeEventHandler}/>
                </div>
                <DialogFooter className="col-span-2 pt-2">
                    <Button className="bg-orange hover:bg-hoverOrange">Continue To Payment</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CheckOutConfirmPage