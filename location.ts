import * as fs from "fs";
import { sortBy, uniq } from "lodash";
import { saveJson } from "./utils";

const index = () => {
  const data = JSON.parse(fs.readFileSync("shop.json", "utf8")) as {
    username: string;
    brand_name: string;
    shop_location: string;
    icon: string;
  }[];

  const locations = data.map((item) => item.shop_location);

  saveJson(sortBy(uniq(locations)), "location.json");
};

index();
