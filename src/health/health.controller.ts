import { Controller, Get, Param } from '@nestjs/common';

@Controller('/health')
export class HealthController {
    @Get()
    getStatus(){
        return {
            "status": "ok",
            "service": "energy-api",
            "timestamp": "2026-08-24T14:30:00.000Z"
          };
    }

}
