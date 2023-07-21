// base.controller.ts

import { Request, Response, NextFunction } from 'express'
import { ObjectLiteral } from 'typeorm'
import BaseService from './base.service'

export abstract class BaseController<T extends ObjectLiteral> {
  protected service: BaseService<T> // Create a protected property to hold the BaseService instance

  constructor(service: BaseService<T>) {
    this.service = service
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const entities = await this.service.getAll() // Use the BaseService methods
      res.status(200).json(entities)
    } catch (error) {
      next(error)
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id

    try {
      const entity = await this.service.getById(id) // Use the BaseService methods
      if (!entity) {
        res.status(404).json({ message: 'Entity not found' })
      } else {
        res.status(200).json(entity)
      }
    } catch (error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const data = req.body

    try {
      const entity = await this.service.create(data) // Use the BaseService methods
      res.status(201).json(entity)
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id
    const data = req.body

    try {
      const entity = await this.service.update(id, data) // Use the BaseService methods
      if (!entity) {
        res.status(404).json({ message: 'Entity not found' })
      } else {
        res.status(200).json(entity)
      }
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id

    try {
      const isDeleted = await this.service.delete(+id) // Use the BaseService methods
      if (!isDeleted) {
        res.status(404).json({ message: 'Entity not found' })
      } else {
        res.status(200).json({ message: 'Entity deleted successfully' })
      }
    } catch (error) {
      next(error)
    }
  }
}
