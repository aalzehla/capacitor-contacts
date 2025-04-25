import { WebPlugin } from '@capacitor/core';

import type { CapacitorContactsPlugin } from './definitions';

export class CapacitorContactsWeb
  extends WebPlugin
  implements CapacitorContactsPlugin
{
  constructor() {
    super({
        name: 'CapacitorContacts',
        platforms: ['web']
    });
  }
  async close() {}
}

const ContactPicker = new CapacitorContactsWeb();
const CapacitorContacts = ContactPicker
export { ContactPicker, CapacitorContacts };
