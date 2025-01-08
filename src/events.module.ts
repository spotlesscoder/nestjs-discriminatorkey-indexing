import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClickedLinkEvent,
  ClickedLinkEventSchema,
} from './click-link-event.schema';
import { Event, EventSchema } from './event.schema';
import { EventsRepository } from './events.repository';
import { SignUpEvent, SignUpEventSchema } from './signup-event.schema';

@Module({
  providers: [EventsRepository],
  imports: [
    MongooseModule.forRoot('mongodb://db:27017'),
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
        discriminators: [
          { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
          { name: SignUpEvent.name, schema: SignUpEventSchema },
        ],
      },
    ]),
  ],
})
export class EventsModule {}
