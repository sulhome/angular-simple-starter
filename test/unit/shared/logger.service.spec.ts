import {ConsoleLogger} from '../../../src/app/shared/logger.service';

describe('logger service', () => {
    it('should log to console', () => {
        spyOn(console, 'log');
        let logger = new ConsoleLogger();
        logger.log('test message');
        expect(console.log).toHaveBeenCalled();
    });
});