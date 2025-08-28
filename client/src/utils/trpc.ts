import { createTRPCReact } from "@trpc/react-query";
// import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./../../../server/src/index";

// Create the tRPC React hooks
export const trpc = createTRPCReact<AppRouter>();

// Create the vanilla client (for use outside of React components)
// export const trpcClient = createTRPCProxyClient<AppRouter>({
//   links: [
//     httpBatchLink({
//       url: "http://localhost:4010/trpc", // Your server URL
//       headers() {
//         return {
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//       },
//     }),
//   ],
// });
