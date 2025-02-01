import { Publisher, OrderCreatedEvent } from '@joshuacauseytickets/common';
import { Subjects } from '@joshuacauseytickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
