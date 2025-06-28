# TransactionIdentifierResponse

TransactionIdentifierResponse contains the transaction_identifier of a transaction that was submitted to either `/construction/hash` or `/construction/submit`.

## Example Usage

```typescript
import { TransactionIdentifierResponse } from "icpmcp-rosetta-api";

let value: TransactionIdentifierResponse = {
  transactionIdentifier: {
    hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `transactionIdentifier`                                                                                           | [models.TransactionIdentifier](../models/transactionidentifier.md)                                                | :heavy_check_mark:                                                                                                | The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool. |
| `metadata`                                                                                                        | [models.TransactionIdentifierResponseMetadata](../models/transactionidentifierresponsemetadata.md)                | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |