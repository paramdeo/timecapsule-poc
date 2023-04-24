interface Env {
  DRAND_ENDPOINT: string,
  DRAND_CHAIN_HASH?: string,
  DRAND_CHAIN_GENESIS: number,
  user: {
    FUTURE_TIME: number,
    TIME_ZONE: string,
    SECRET_STRING: string
  }
}

export const env: Env = {
  // Drand Enpdoint - https://drand.love/developer/http-api/#public-endpoints
  DRAND_ENDPOINT: "https://drand.cloudflare.com",
  DRAND_CHAIN_HASH: "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",
  // https://drand.love/developer/http-api/#chain-hash-info
  DRAND_CHAIN_GENESIS: 1595431050,
  user: { // Edit below as needed
    FUTURE_TIME: 1682197638, // UNIX timestamp of desired reveal date
    TIME_ZONE: "America/Guyana",
    SECRET_STRING: "https://www.youtube.com/watch?v=J9LgHNf2Qy0" // Can be anything, just a PoC
  }
}