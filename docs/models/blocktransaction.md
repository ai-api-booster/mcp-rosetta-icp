# BlockTransaction

BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.

## Example Usage

```typescript
import { BlockTransaction } from "icpmcp-rosetta-api";

let value: BlockTransaction = {
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
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
| `blockIdentifier`                                                                                    | [models.BlockIdentifier](../models/blockidentifier.md)                                               | :heavy_check_mark:                                                                                   | The block_identifier uniquely identifies a block in a particular network.                            |
| `transaction`                                                                                        | [models.Transaction](../models/transaction.md)                                                       | :heavy_check_mark:                                                                                   | Transactions contain an array of Operations that are attributable to the same TransactionIdentifier. |