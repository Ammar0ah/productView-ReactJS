import React, { Component } from 'react';
import Input from '../Form/input'
import './store.css'
import StoreItem from './storeItem'

class Store extends Component {
    state = {
        items: [ {
            category:String,
            name:String,
            color:String,
            image:String
        }],
        originalItems: []
    }
componentDidMount() {
     this.items = [{
         category: 'men', 
        name : 'Blue Shirt long sleeves',
        color: 'black',
        price : '10$',
        image: require('../../images/blueshirt.jpg')
        },
        {  category:'men',
            name: 'black Pants',
            color: 'black',
            price: '12$',
            image: require('../../images/blackpants.jpg')
        },
         {
             category: 'men',
            name: 'black Sweater',
            color: 'black',
            price:'20$',
            image: require('../../images/blacksweeter.jpg')
        }, {
             category: 'men',
            name: 'Grey Pants',
            color: 'grey',
            price : '12$',
            image: require('../../images/greypants.jpg')
        },
        {
            category: 'men',
            name: 'blue shirt',
            color: 'blue',
            price:'20$',
            image: require('../../images/shirt0.jpg')
        },
         {
             category: 'women',
             name: 'Beyge sweater',
             color: 'beyge pink',
             price: '75$',
             image: require('../../images/beygesweater.jpg')
         },
         {
             category: 'women',
             name: 'Dark Blue dress',
             color: 'dark blue',
             price: '100$',
             image: require('../../images/darkbluedress.jpg')
         },
    ]
    this.setState({items:this.items})
}
  onChangeInput= (e)=> {
      let value = "" + e.target.value.toLowerCase()
      let filteredItems = [] 
     switch(e.target.name){
         case "category":
             filteredItems = this.items.filter(item => {  
                 console.log(item)
                 let temp = item.category.toLowerCase()
                 if (temp.includes(value))
                     return item
             })
             console.log(filteredItems)
             this.setState({ items: filteredItems })
             break;
        case "name":
         filteredItems = this.items.filter(item =>{
            let temp =  item.name.toLowerCase()    
             if (temp.includes(value))
             return item})
         console.log(filteredItems)
         this.setState({items:filteredItems})
             break;
        case "price":
         
             filteredItems = this.items.filter(item =>item.price.includes(value))
             console.log(filteredItems)
             this.setState({ items: filteredItems })
             break;
        case "color":
             filteredItems = this.items.filter(item => item.color.includes(value))
             console.log(filteredItems)
             this.setState({ items: filteredItems })
        break;
        default:
            this.setState({items:this.items})
     }
  }
    
    render() {
      let items = this.state.items.map(item => (
          <div className="item" key={item.name} >
          <StoreItem
                 title = {item.name}
                 price = {item.price}
                 image = {item.image}
                 category = {item.category}
            />
          </div>
      ))
        return (
            <section className="page">
                <div className="input">

                    <Input name="category" label="category" onChange={this.onChangeInput} />
                <Input name="name" label="name" onChange={this.onChangeInput}/>
                    <Input name="price" label="price" onChange={this.onChangeInput} />
                    <Input name="color" label="color" onChange={this.onChangeInput}/>
              
                </div>
                <div className="container">
                  {items}
                </div>
              
            </section>
        );
    }
}

export default Store;