# Development

### Link to Deployed Website
If you used the stencil code, this is https://giganticbutterfly123.github.io/Development/

### Goal and Value of the Application

The goal of my application was to create an online ordering page for a fake coffee shop called Starcents. Modeled off of Starbucks coffee and other drinks, the Starcents websites allows users to find drinks of their liking and checkout. They can filter the drinks based on hot or iced drinks and even find seasonal/holiday drinks or browse the classic menu. Since buying coffee from a coffee shop can be a bit more expensive than making it at home users can also filter the drinks by price to find the cheapest drink option!

### Usability Principles Considered

In terms of usability the site is efficent, customizable to the user, and intuitve. The site is extremely simple and theres only so many things you can do which makes it both efficient and intuitve. One of the main usability principles considered was customizability. In other words, how can we make finding your favorite drink quick and easy. Hence, the filters make it easy to decide what your looking for: iced or hot? in the holdiday spirit? filter for seasonal drinks. Overall the site is simple and easy thus making it efficent and customizable for users.

### Organization of Components
The organization of components is as follows, data lies in the assets folder. Components contains the drinkitem card elements, a button for sorting, the checkbox filter component and a card specific css file for the drinkitem component cards. In the rest of src you will find app.js, where we render the muliple checks file. The multiple checks file contains all necessary functions to complete all major functionality such as sorting, filtering, and aggregation. Next, any styling components are also maintained in the src folder.

### How Data is Passed Down Through Components

Data is taken from the data.json file and is parsed into an item card in the components folder. Each item card contains all attricutes regarding a specific drink. We can then use these item cards to render an image along with all attributes onto our screen. These attributes can be used to trigger state changes. By doing item.seasonal or item.temperature we can access a specific items data at a specific attribute and use it for filtering or sorting purposes.

### How the User Triggers State Changes
Using each items parameters such as item, updateCart, index, price, setPrice, we are able to use the data associated with each attribute to trigger state changes. When a user clicks add the cart we are able to access the price attribute associated with each item and add it to the default. In this case, 0, we then add then use a parameter such as setPrice and add the default + the item.price attribute. This works similarly when a user removes something from there cart. 

