# EventsBlocksRequest

EventsBlocksRequest is utilized to fetch a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state.

## Example Usage

```typescript
import { EventsBlocksRequest } from "icpmcp";

let value: EventsBlocksRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  offset: 5,
  limit: 5,
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `networkIdentifier`                                                                                                                                                                              | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | The network_identifier specifies which network a particular object is associated with.                                                                                                           |                                                                                                                                                                                                  |
| `offset`                                                                                                                                                                                         | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | offset is the offset into the event stream to sync events from. If this field is not populated, we return the limit events backwards from tip. If this is set to 0, we start from the beginning. | 5                                                                                                                                                                                                |
| `limit`                                                                                                                                                                                          | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | limit is the maximum number of events to fetch in one call. The implementation may return <= limit events.                                                                                       | 5                                                                                                                                                                                                |