import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { Order, OrderStatus } from '../../models/order';

it('Marks an order as cancelled', async () => {
  // Create a ticket with Ticket Model
  const ticket = Ticket.build({ title: 'test', price: 20 });
  await ticket.save();

  const user = global.signin();
  // Make a request to create an order
  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  // Make a request to cancel the order
  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(204);

  // Expect order to be cancelled
  const updateOrder = await Order.findById(order.id);

  expect(updateOrder?.status).toEqual(OrderStatus.Cancelled);
});
