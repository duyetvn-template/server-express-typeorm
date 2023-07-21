import { DeepPartial, FindOneOptions, ObjectLiteral, Repository } from 'typeorm';

export default abstract class BaseService<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async getAll(): Promise<T[]> {
    return this.repository.find();
  }

  // FindOneOptions<T>
  async getById(id: any): Promise<T | null> {
    return this.repository.findOne(id);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  // FindOneOptions<T>
  async update(id: any, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.repository.findOne(id);
    if (!entity) return null;

    this.repository.merge(entity, data);
    return this.repository.save(entity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected === 1;
  }
}
