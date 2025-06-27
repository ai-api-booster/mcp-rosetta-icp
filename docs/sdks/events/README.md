# Events
(*events*)

## Overview

### Available Operations

* [eventsBlocks](#eventsblocks) - [INDEXER] Get a range of BlockEvents

## eventsBlocks

`/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an "indexer" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta "indexer" MUST support this endpoint.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.events.eventsBlocks({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { eventsEventsBlocks } from "icpmcp/funcs/eventsEventsBlocks.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await eventsEventsBlocks(icpmcp, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsEventsBlocks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.EventsBlocksRequest](../../models/eventsblocksrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventsBlocksResponse](../../models/eventsblocksresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |