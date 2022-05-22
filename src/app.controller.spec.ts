import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return implementation of IAPIInfo', () => {
      expect(appController.getApiInfo()).toMatchObject(
        Object.assign({
          version: 0,
          build: 0,
          last_build: null,
          last_tag: null,
          status: true
        })
      );
    });
  });
});
