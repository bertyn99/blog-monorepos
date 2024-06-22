import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import PageTranslation from '#models/page_translation'
import PageVersion from '#models/page_version'
import Block from '#models/block'

export default class Page extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare authorId: number

  @belongsTo(() => User)
  declare author: BelongsTo<typeof User>

  @hasMany(() => PageTranslation)
  declare translations: HasMany<typeof PageTranslation>

  @hasMany(() => PageVersion)
  declare versions: HasMany<typeof PageVersion>

  @hasMany(() => Block)
  declare content: HasMany<typeof Block>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}