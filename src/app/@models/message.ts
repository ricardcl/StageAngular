import { Contact } from './contact';
import { MessageStatus } from '../services/message-status.enum';

export interface Message {
  id?: number;
  text: string;
  status: MessageStatus;
  userId: number;
  origin?: Contact;
  recipient?: Contact;
}

