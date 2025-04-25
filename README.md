# capacitor-contacts

This capacitor plugin allows you to use the native contact picker UI on Android or iOS for single contact selection. Both platforms will return the same payload structure, where the data exists.

## Install

```bash
npm install @aalzehla/capacitor-contacts
npx cap sync
```

## API

<docgen-index>

* [`open()`](#open)
* [`close()`](#close)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open()

```typescript
open() => Promise<Contact[]>
```

**Returns:** <code>Promise&lt;Contact[]&gt;</code>

--------------------


### close()

```typescript
close() => Promise<void>
```

--------------------


### Interfaces


#### Contact

| Prop                          | Type                |
| ----------------------------- | ------------------- |
| **`identifier`**              | <code>string</code> |
| **`androidContactLookupKey`** | <code>string</code> |
| **`contactId`**               | <code>string</code> |
| **`givenName`**               | <code>string</code> |
| **`familyName`**              | <code>string</code> |
| **`nickname`**                | <code>string</code> |
| **`fullName`**                | <code>string</code> |
| **`jobTitle`**                | <code>string</code> |
| **`departmentName`**          | <code>string</code> |
| **`organizationName`**        | <code>string</code> |
| **`note`**                    | <code>string</code> |
| **`phoneNumbers`**            | <code>any[]</code>  |
| **`emailAddresses`**          | <code>any[]</code>  |
| **`postalAddresses`**         | <code>any[]</code>  |

</docgen-api>
