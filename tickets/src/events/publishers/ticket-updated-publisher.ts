import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@joshuacauseytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
