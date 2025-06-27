# BlockTransactionResponse

A BlockTransactionResponse contains information about a block transaction.

## Example Usage

```typescript
import { BlockTransactionResponse } from "icpmcp";

let value: BlockTransactionResponse = {
  transaction: {
    transactionIdentifier: {
      hash:
        "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
    operations: [],
    relatedTransactions: [
      {
        networkIdentifier: {
          blockchain: "bitcoin",
          network: "mainnet",
          subNetworkIdentifier: {
            network: "shard 1",
            metadata: {},
          },
        },
        transactionIdentifier: {
          hash:
            "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
        },
        direction: "forward",
      },
    ],
    metadata: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `transaction`                                                                                        | [models.Transaction](../models/transaction.md)                                                       | :heavy_check_mark:                                                                                   | Transactions contain an array of Operations that are attributable to the same TransactionIdentifier. |