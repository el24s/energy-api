import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingsService {


    findOne(id: string) {
        if (!id) {
            return this.findOne(id);
        }
    }
}
