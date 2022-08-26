import { BrandID, DetailShop, ListOfficialShop } from "./type";
import * as download from "image-downloader";
import fetch from "cross-fetch";
import logger from "./logger";
import { pick } from "remeda";
import * as fs from "fs";

export const getListOfficialShop = async () => {
  logger.info("Get list official shop");
  const endpoint = `https://shopee.co.id/api/v4/official_shop/get_shops_by_category`;

  const resp: ListOfficialShop = await fetch(endpoint).then((resp) =>
    resp.json(),
  );

  const brands = resp.data.brands;

  let bucket: BrandID[] = [];

  for (let i = 0; i < brands.length; i++) {
    bucket = [...bucket, ...brands[i].brand_ids];
  }

  saveJson(bucket, "raw-shop.json");

  const selectUsefulObject = bucket.map((item) => {
    return pick(item, ["username", "brand_name"]);
  });

  return selectUsefulObject;
};

export const getShopDetail = async (username: string) => {
  const endpoint = `https://shopee.co.id/api/v4/shop/get_shop_detail?sort_sold_out=0&username=${username}`;

  const resp: DetailShop = await fetch(endpoint).then((resp) => resp.json());

  return {
    shop_location: resp.data.shop_location,
    icon: resp.data.account.portrait,
  };
};

export const getIcon = async (imageUrl: string) => {
  const endpoint = `https://cf.shopee.co.id/file/${imageUrl}`;
  const path = `${__dirname}/icon/${imageUrl}.jpg`;

  const options = {
    url: endpoint,
    dest: path,
  };

  await download
    .image(options)
    .then(({ filename }) => {
      logger.debug("Saved to", filename);
    })
    .catch((err) => logger.error(err));
};

export const saveJson = async (data: any, filename: string) => {
  const path = `${__dirname}/${filename}`;

  fs.writeFile(path, JSON.stringify(data, null, 2), (err: any) => {
    if (err) {
      logger.error(err);
    }
  });
};
