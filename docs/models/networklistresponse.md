# NetworkListResponse

A NetworkListResponse contains all NetworkIdentifiers that the node can serve information for.

## Example Usage

```typescript
import { NetworkListResponse } from "icpmcp";

let value: NetworkListResponse = {
  networkIdentifiers: [
    {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `networkIdentifiers`                                         | [models.NetworkIdentifier](../models/networkidentifier.md)[] | :heavy_check_mark:                                           | N/A                                                          |