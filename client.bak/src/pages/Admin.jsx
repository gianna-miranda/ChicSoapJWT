import React from 'react'
import { Link } from 'react-router-dom'

import Content from '../components/feature/product_cards/content'
import Footer from '../components/core/Footer/footer'

class AdminPage extends React.Component {
    componentDidMount() {
        fetch('/api/products')
                .then(res => res.json())
                .then(ish => this.setState({ products: ish }))
      }
    render () {
        return (
        <>
        <h1>This is an admin page.</h1>
       <Content/>
       <Footer/>
           
        </>
    )
    }
}

export default AdminPage