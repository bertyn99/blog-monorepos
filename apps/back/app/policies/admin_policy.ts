import User from '#models/user'

import BasePolicy from '#policies/base_policy'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
import { Role } from '@yggdra/shared'

export default class AdminUserPolicy extends BasePolicy {
  canViewListUser(user: User): AuthorizerResponse {
    return user.roleId === Role.EDITOR
  }

  canViewUser(user: User, targetUser: User): AuthorizerResponse {
    return user.id === targetUser?.id
  }

  canCreateUser(user: User): AuthorizerResponse {
    return true
  }

  canUpdateUser(user: User, targetUser: User): AuthorizerResponse {
    return user.id === targetUser?.id
  }

  canDeleteUser(user: User, targetUser: User): AuthorizerResponse {
    return user.id == targetUser.id
  }
}