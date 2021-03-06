/* tslint:disable:only-arrow-functions no-invalid-this */

import { bookshelf } from '../server';

export const OrganizationalUnit = bookshelf.Model.extend({
  tableName: 'organizationalunit',
  hasTimestamps: true,
  softDelete: false,
  validations: {
    name: [
      {
        method: 'isLength',
        args: { min: 1, max: 50 },
        error: 'Your OU name must be between 1 and 50 characters.'
      }
    ]
  }
});
