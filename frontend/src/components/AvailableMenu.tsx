import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
        <h1 className="text-xl md:text-2xl font-extrabold mb-6">Available Menu</h1>
        <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
            <Card className="md:max-w-xs mx-auto shadow-lgrounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://content.jdmagicbox.com/comp/def_content/pure_veg_restaurants/default-pure-veg-restaurants-5.jpg?clr=#5c3b0a" alt="restaurant-img" />
                <CardContent className="p-4">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Veg Meals</h1>
                  <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <h3 className="text-lg font-semi-bold mt-4">
                    Price:<span className="text-[#D19254]">₹120</span>
                  </h3>
                </CardContent>
                <CardFooter p-4>
                  <Button className="w-full bg-orange hover:bg-hoverOrange">Add to Cart</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default AvailableMenu