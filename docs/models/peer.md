# Peer

A Peer is a representation of a node's peer.

## Example Usage

```typescript
import { Peer } from "icpmcp";

let value: Peer = {
  peerId: "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `peerId`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              | 0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5       |
| `metadata`                                       | [models.PeerMetadata](../models/peermetadata.md) | :heavy_minus_sign:                               | N/A                                              |                                                  |