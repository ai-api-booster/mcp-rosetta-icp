# BlockEvent

BlockEvent represents the addition or removal of a BlockIdentifier from storage. Streaming BlockEvents allows lightweight clients to update their own state without needing to implement their own syncing logic.

## Example Usage

```typescript
import { BlockEvent } from "icpmcp-rosetta-api";

let value: BlockEvent = {
  sequence: 5,
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  type: "block_added",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sequence`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier. | 5                                                                                            |
| `blockIdentifier`                                                                            | [models.BlockIdentifier](../models/blockidentifier.md)                                       | :heavy_check_mark:                                                                           | The block_identifier uniquely identifies a block in a particular network.                    |                                                                                              |
| `type`                                                                                       | [models.BlockEventType](../models/blockeventtype.md)                                         | :heavy_check_mark:                                                                           | BlockEventType determines if a BlockEvent represents the addition or removal of a block.     |                                                                                              |