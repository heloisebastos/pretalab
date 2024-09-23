import { IdGenerator } from '../../application/repositories/id-generation-interface';
import { v4 as uuid } from 'uuid';

export class IdentifierGenerator implements IdGenerator {
    generate(): string {
        return uuid();
    }
}