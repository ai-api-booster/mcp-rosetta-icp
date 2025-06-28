# ConstructionDeriveResponse

ConstructionDeriveResponse is returned by the `/construction/derive` endpoint.

## Example Usage

```typescript
import { ConstructionDeriveResponse } from "icpmcp-rosetta-api";

let value: ConstructionDeriveResponse = {
  accountIdentifier: {
    address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
    subAccount: {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                                                                            | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | [DEPRECATED by `account_identifier` in `v1.4.4`] Address in network-specific format.                                                                                                                 |
| `accountIdentifier`                                                                                                                                                                                  | [models.AccountIdentifier](../models/accountidentifier.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                   | The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated). |
| `metadata`                                                                                                                                                                                           | [models.ConstructionDeriveResponseMetadata](../models/constructionderiveresponsemetadata.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |