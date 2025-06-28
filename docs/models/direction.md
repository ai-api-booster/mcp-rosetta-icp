# Direction

Used by RelatedTransaction to indicate the direction of the relation (i.e. cross-shard/cross-network sends may reference `backward` to an earlier transaction and async execution may reference `forward`). Can be used to indicate if a transaction relation is from child to parent or the reverse.

## Example Usage

```typescript
import { Direction } from "icpmcp-rosetta-api";

let value: Direction = "backward";
```

## Values

```typescript
"forward" | "backward"
```