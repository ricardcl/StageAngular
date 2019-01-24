import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationHeaderComponent } from './conversation-header/conversation-header.component';
import { ConversationWriterComponent } from './conversation-writer/conversation-writer.component';
import { ConversationDisplayComponent } from './conversation-display/conversation-display.component';
import { ConversationDisplayMessageComponent } from './conversation-display-message/conversation-display-message.component';

@NgModule({
  declarations: [ConversationComponent, ConversationHeaderComponent, ConversationWriterComponent, ConversationDisplayComponent, ConversationDisplayMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [ConversationComponent]
})
export class ConversationModule { }
