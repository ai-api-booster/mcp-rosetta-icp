# ConstructionSubmitRequest

The transaction submission request includes a signed transaction.

## Example Usage

```typescript
import { ConstructionSubmitRequest } from "icpmcp";

let value: ConstructionSubmitRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  signedTransaction: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                    | [models.NetworkIdentifier](../models/networkidentifier.md)                             | :heavy_check_mark:                                                                     | The network_identifier specifies which network a particular object is associated with. |
| `signedTransaction`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |