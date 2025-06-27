<!-- Start SDK Example Usage [usage] -->
```typescript
import { Icpmcp } from "icpmcp";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.network.networkList({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->