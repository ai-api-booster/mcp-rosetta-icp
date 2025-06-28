# NetworkRequest

A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.

## Example Usage

```typescript
import { NetworkRequest } from "icpmcp-rosetta-api";

let value: NetworkRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                    | [models.NetworkIdentifier](../models/networkidentifier.md)                             | :heavy_check_mark:                                                                     | The network_identifier specifies which network a particular object is associated with. |
| `metadata`                                                                             | [models.NetworkRequestMetadata](../models/networkrequestmetadata.md)                   | :heavy_minus_sign:                                                                     | N/A                                                                                    |