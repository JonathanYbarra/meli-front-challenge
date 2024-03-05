import { TypeWithKey } from "./global.types";

export const parseCurrency = (value: string) => {
  const currencies: TypeWithKey<string> = {
    usd: "U$S",
    ars: "$",
  };

  return currencies[value.toLowerCase()] || value;
};
