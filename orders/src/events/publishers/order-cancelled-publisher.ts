import { Publisher, OrderCancelledEvent } from '@joshuacauseytickets/common';
import { Subjects } from '@joshuacauseytickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
