# addToCard_React
Tutoriel React JS and Redux

To start the dev mode

`npm run dev`

To start production Compilation

`npm run build`



### New architecture
>components
>> App.jsx

>> Header.jsx

>> Store.jsx

>> Cart.jsx

>> Footer.jsx

>> Product.jsx

>> CartProduct.jsx

## Step 1

Import differents components & Items list

```Javascript
	import Header         from './Header'
	import StoreComponent from './Store'
	import Cart           from './Cart'
	import Footer         from './Footer'
	
	const inventory       = require('../../public/contrib/	products.json')
```

## Step 2

In Store.jsx & Cart.jsx we map on item to construct each product.

```JavaScript
	{this.props.items.map((data, index) => (
            <Product key={index} id={index} product={data} />
        ))}
```

Pass `decrementCounter()` from Cart.jsx to CartProduct.jsx

