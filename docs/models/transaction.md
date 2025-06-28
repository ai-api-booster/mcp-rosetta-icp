# Transaction

Transactions contain an array of Operations that are attributable to the same TransactionIdentifier.

## Example Usage

```typescript
import { Transaction } from "icpmcp-rosetta-api";

let value: Transaction = {
  transactionIdentifier: {
    hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
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
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactionIdentifier`                                                                                                                                              | [models.TransactionIdentifier](../models/transactionidentifier.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                   | The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.                                                    |                                                                                                                                                                      |
| `operations`                                                                                                                                                         | [models.Operation](../models/operation.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |                                                                                                                                                                      |
| `relatedTransactions`                                                                                                                                                | [models.RelatedTransaction](../models/relatedtransaction.md)[]                                                                                                       | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |                                                                                                                                                                      |
| `metadata`                                                                                                                                                           | [models.TransactionMetadata](../models/transactionmetadata.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                   | Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata. | {<br/>"size": 12378,<br/>"lockTime": 1582272577<br/>}                                                                                                                |