# BlockTransactionRequest

A BlockTransactionRequest is used to fetch a Transaction included in a block that is not returned in a BlockResponse.

## Example Usage

```typescript
import { BlockTransactionRequest } from "icpmcp";

let value: BlockTransactionRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  transactionIdentifier: {
    hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                               | [models.NetworkIdentifier](../models/networkidentifier.md)                                                        | :heavy_check_mark:                                                                                                | The network_identifier specifies which network a particular object is associated with.                            |
| `blockIdentifier`                                                                                                 | [models.BlockIdentifier](../models/blockidentifier.md)                                                            | :heavy_check_mark:                                                                                                | The block_identifier uniquely identifies a block in a particular network.                                         |
| `transactionIdentifier`                                                                                           | [models.TransactionIdentifier](../models/transactionidentifier.md)                                                | :heavy_check_mark:                                                                                                | The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool. |