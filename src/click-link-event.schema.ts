import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ClickedLinkEvent {
  kind: string;
  time: Date;

  @Prop({ type: String, required: true, index: true })
  url: string;
}

export const ClickedLinkEventSchema =
  SchemaFactory.createForClass(ClickedLinkEvent);
