# Operator

Operator is used by query-related endpoints to determine how to apply conditions. If this field is not populated, the default `and` value will be used.

## Example Usage

```typescript
import { Operator } from "icpmcp";

let value: Operator = "and";
```

## Values

```typescript
"or" | "and"
```