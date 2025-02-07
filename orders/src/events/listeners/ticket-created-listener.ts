import { Message } from 'node-nats-streaming';
import {
  Subjects,
  Listener,
  TicketCreatedEvent,
} from '@joshuacauseytickets/common';
import { Ticket } from '../../models/ticket';

export class TicketCreatedListener extends Listener<TicketCreatedListener> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
