import React from 'react';
import AppNav from '../components/core/AppNav/AppNav';
import Content from '../components/feature/product_cards/content'
import Footer from '../components/core/Footer/footer'

class Products extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/products')
                .then(res => res.json())
                .then(ish => this.setState({ products: ish }))
      }
    render () {
        return (
        <>
       <Content/>
       <Footer/>
           
        </>
    )
    }
}
export default Products;