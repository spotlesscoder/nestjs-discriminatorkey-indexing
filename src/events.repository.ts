import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClickedLinkEvent } from './click-link-event.schema';
import { Event, EventDocument } from './event.schema';
import { SignUpEvent } from './signup-event.schema';

@Injectable()
export class EventsRepository implements OnModuleInit {
  constructor(
    @InjectModel(Event.name) private readonly model: Model<EventDocument>,
    @InjectModel(ClickedLinkEvent.name)
    private readonly clickedLinkModel: Model<EventDocument>,
    @InjectModel(SignUpEvent.name)
    private readonly signUpModel: Model<EventDocument>,
  ) {}

  async onModuleInit() {
    const signup = new SignUpEvent();
    signup.kind = SignUpEvent.name;
    signup.time = new Date();
    signup.user = 'user';

    await this.model.create(signup);

    const clickEvent = new ClickedLinkEvent();
    clickEvent.kind = ClickedLinkEvent.name;
    clickEvent.time = new Date();
    clickEvent.url = 'foo';

    await this.model.create(clickEvent);

    await this.findByUrl();
    await this.findByUser();
  }

  async findByUrl(): Promise<void> {
    const doc = await this.clickedLinkModel.find({ url: 'foo' });
    console.log(doc);
  }

  async findByUser(): Promise<void> {
    const doc = await this.signUpModel.find({ user: 'user' });
    console.log(doc);
  }
}
