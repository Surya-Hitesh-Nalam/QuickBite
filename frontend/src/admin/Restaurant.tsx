import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { restaurantFormSchema, RestaurantFormSchema } from "@/schema/restaurantSchema"
import { Loader2 } from "lucide-react"
import { FormEvent, useState } from "react"

const Restaurant = () => {
  const [input,setInput] = useState<RestaurantFormSchema>({
    restaurantName:"",
    city:"",
    country:"",
    deliveryTime:0,
    cuisines:[],
    imageFile:undefined
  })

  const [errors,setErrors] = useState<Partial<RestaurantFormSchema>>({})
  const changeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value,type} = e.target
    setInput({...input,[name]:type==='number'?Number(value):value})
  }

  const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    const result = restaurantFormSchema.safeParse(input)
    if(!result.success){
      const fieldErrors = result.error.formErrors.fieldErrors
      setErrors(fieldErrors as Partial<RestaurantFormSchema>)
      return;
    }
    // add restaurant api implementation start from here
    console.log(e)
  }
  const loading=false
  const restaurant = true
  return (
    <div className="max-w-6xl mx-auto my-10">
        <div>
            <h1 className="font-extraboldtext-2xl mb-5">Add Restaurants</h1>
            <form onSubmit={submitHandler}>
                <div className="md:grid grid-cols-2 gap-4 space-y-2 md:space-y-0">
                    <div>
                      <Label>Restaurant Name</Label>
                      <Input type='text' value={input.restaurantName} onChange={changeEventHandler} name="restaurantName" placeholder="enter your restaurant name"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.restaurantName}</span>}
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input type='text' name="city" value={input.city} onChange={changeEventHandler} placeholder="enter your city"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.city}</span>}
                    </div>
                    <div>
                      <Label>Country</Label>
                      <Input type='text' name="country" value={input.country} onChange={changeEventHandler} placeholder="enter your country"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.country}</span>}
                    </div>
                    <div>
                      <Label>Delivery Time</Label>
                      <Input type='number' name="deliveryTime" value={input.deliveryTime} onChange={changeEventHandler} placeholder="enter delivery time"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.deliveryTime}</span>}
                    </div>
                    <div>
                      <Label>Cuisines</Label>
                      <Input type='text' name="cuisines" value={input.cuisines} onChange={(e)=>setInput({...input,cuisines:e.target.value.split(",")})} placeholder="e.g. Biriyani,Pizza,Momos"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.cuisines}</span>}
                    </div>
                    <div>
                      <Label>Upload Restaurant Image</Label>
                      <Input onChange={(e)=>setInput({...input,imageFile:e.target.files?.[0]||undefined})} type='file' accept="image/*" name="imageFile"/>
                      {errors&&<span className="text-xs text-red-600 font-medium">{errors.imageFile?.name || "Image file is required"}</span>}
                    </div>
                </div>
                <div className="my-5 w-fit">
                {
                  loading ? (  
                      <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>
                  ):(   
                      <Button className="bg-orange hover:bg-hoverOrange">{restaurant?'update your Restaurant':'Add Your Restaurant'}</Button>
                  )
                }
              </div>
            </form>
        </div>
    </div>
  )
}

export default Restaurant