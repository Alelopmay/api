import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { AppService } from 'src/app.service';
import { NoteService } from './note.service';

@Module({
    controllers: [NoteController],
    providers: [NoteService,AppService],
})
export class NoteModule {}
