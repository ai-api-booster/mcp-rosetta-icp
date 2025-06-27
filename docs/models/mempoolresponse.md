# MempoolResponse

A MempoolResponse contains all transaction identifiers in the mempool for a particular network_identifier.

## Example Usage

```typescript
import { MempoolResponse } from "icpmcp";

let value: MempoolResponse = {
  transactionIdentifiers: [
    {
      hash:
        "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `transactionIdentifiers`                                             | [models.TransactionIdentifier](../models/transactionidentifier.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |