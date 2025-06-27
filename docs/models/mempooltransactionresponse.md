# MempoolTransactionResponse

A MempoolTransactionResponse contains an estimate of a mempool transaction. It may not be possible to know the full impact of a transaction in the mempool (ex: fee paid).

## Example Usage

```typescript
import { MempoolTransactionResponse } from "icpmcp";

let value: MempoolTransactionResponse = {
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
  metadata: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `transaction`                                                                                        | [models.Transaction](../models/transaction.md)                                                       | :heavy_check_mark:                                                                                   | Transactions contain an array of Operations that are attributable to the same TransactionIdentifier. |                                                                                                      |
| `metadata`                                                                                           | [models.MempoolTransactionResponseMetadata](../models/mempooltransactionresponsemetadata.md)         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | {<br/>"descendant_fees": 123923,<br/>"ancestor_count": 2<br/>}                                       |