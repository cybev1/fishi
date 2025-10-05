import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  ok() {
    return { status: 'ok', service: 'fishi-api', version: '0.1.0' };
  }
}
