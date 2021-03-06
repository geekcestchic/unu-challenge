import React from 'react'
import style from '../styles/style'

function ExtraData (props) {
  const order = props.order
  const weight = parseInt(order.weight, 10)
  return (
    <div>
      <div className="modale-background" style={style.modal}/>
      <div className="detail-modal" style={style.detail}>
        <div className="close" style={style.close}>X</div>
        <div>Last updated: {order.updated_at}</div>
        <div>Customer email: {order.customer_email}</div>
        <div>Order ID: {order.order_id}</div>
        <div>Postcode: {order.postcode}</div>
        <div>Weight: {weight}</div>
      </div>
    </div>
  )
}

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render () {
    const {order} = this.props
    const fullName = (order.firstname || '') + ' ' + (order.lastname || '')
    const total = order.total_paid ? 'Paid ' + parseInt(order.total_paid, 10) + ' ' + order.order_currency_code : 'Not paid'
    return (
      <div style={style.order} className="order" onClick={this.onClick}>
        <div>Order For - {fullName}</div>
        <div>Payment Status: {total}</div>
        {this.state.expanded ? <ExtraData order={this.props.order}/> : <button style={style.button}>Click for detail</button> }
      </div>
    )
  }
}

Order.propTypes = {
  order: React.PropTypes.object.isRequired
}

export default Order
