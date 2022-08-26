import logger from "./logger";
import { getListOfficialShop, getShopDetail, saveJson } from "./utils";

const main = async () => {
  const listOfficialShop = await getListOfficialShop();

  for (let i = 0; i < listOfficialShop.length; i++) {
    logger.info(`Get shop detail ${i + 1}/${listOfficialShop.length}`);
    const detail = await getShopDetail(listOfficialShop[i].username);
    listOfficialShop[i] = { ...listOfficialShop[i], ...detail };
  }

  saveJson(listOfficialShop, "shop.json");
};

main();
