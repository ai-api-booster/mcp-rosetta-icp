# MempoolTransactionRequest

A MempoolTransactionRequest is utilized to retrieve a transaction from the mempool.

## Example Usage

```typescript
import { MempoolTransactionRequest } from "icpmcp-rosetta-api";

let value: MempoolTransactionRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
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
| `transactionIdentifier`                                                                                           | [models.TransactionIdentifier](../models/transactionidentifier.md)                                                | :heavy_check_mark:                                                                                                | The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool. |