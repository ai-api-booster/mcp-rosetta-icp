# Details

Often times it is useful to return context specific to the request that caused the error (i.e. a sample of the stack trace or impacted account) in addition to the standard error message.

## Example Usage

```typescript
import { Details } from "icpmcp-rosetta-api";

let value: Details = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |