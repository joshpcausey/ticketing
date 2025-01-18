import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@joshuacauseytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
