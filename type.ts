export interface ListOfficialShop {
  error: number;
  error_msg: null;
  data: Data;
}

export interface Data {
  brands: Brand[];
  cat_id: number;
  brand_count: number;
  cat_name: string;
}

export interface Brand {
  index: string;
  total: number;
  brand_ids: BrandID[];
}

export interface BrandID {
  username: string;
  brand_name: string;
  shopid: number;
  logo: string;
  logo_pc: string;
  shop_collection_id: number;
  ctime: number;
  brand_label: number;
}

export interface DetailShop {
  error: number;
  error_msg: string;
  data: Data;
  version: string;
}

export interface Data {
  place: null;
  ctime: number;
  mtime: number;
  country: string;
  last_active_time: number;
  is_shopee_verified: boolean;
  is_official_shop: boolean;
  chat_disabled: boolean;
  disable_make_offer: number;
  enable_display_unitno: null;
  cover: string;
  rating_normal: number;
  rating_bad: number;
  rating_good: number;
  shop_covers: ShopCover[];
  description: string;
  is_semi_inactive: null;
  is_blocking_owner: null;
  preparation_time: number;
  cancellation_rate: number;
  followed: boolean;
  buyer_rating: null;
  vacation: boolean;
  show_low_fulfillment_warning: boolean;
  show_official_shop_label: boolean;
  show_official_shop_label_in_title: boolean;
  show_shopee_verified_label: boolean;
  show_official_shop_label_in_normal_position: null;
  real_url_if_matching_custom_url: null;
  status: number;
  cb_option: number;
  campaign_id: null;
  has_decoration: boolean;
  shop_location: string;
  rating_star: number;
  is_ab_test: null;
  show_live_tab: boolean;
  has_flash_sale: boolean;
  userid: number;
  shopid: number;
  name: string;
  item_count: number;
  follower_count: number;
  response_rate: number;
  response_time: null;
  account: Account;
  campaign_config: null;
  has_shopee_flash_sale: boolean;
  has_in_shop_flash_sale: boolean;
  has_brand_sale: boolean;
  is_preferred_plus_seller: boolean;
  show_posts_tab: boolean;
  show_new_arrival_items: boolean;
  new_arrival_items_start_ts: number;
  visible_regions: null;
  block_cb_user: null;
  address: null;
  priority_flash_sale_group: null;
  visibility: number;
  warning: number;
  lower_deco_qualified_shop: null;
  default_landing: string;
  latest_item_ctime: null;
  has_join_membership: boolean;
  ab_test_info: AbTestInfo;
  show_membership_tab: boolean;
  show_video_entry: boolean;
  video_entry_info: string;
  campaign_hot_deal_discount_min: number;
  show_deco_entry: null;
}

export interface AbTestInfo {
  header_tabs_layout: string;
  deep_discount_item_card: string;
  item_card: string;
  feeds_live_landing: string;
  image_category: string;
  remove_item_count_on_category_tab: string;
  default_component_improvement: string;
  deep_discount_enhancement: string;
  new_default_scp: string;
  default_landing: string;
  two_tier_category: string;
  two_tier_category_for_layoutc: string;
}

export interface Account {
  username: string;
  following_count: number;
  portrait: string;
  is_seller: boolean;
  phone_verified: boolean;
  email_verified: boolean;
  fbid: string;
  total_avg_star: number;
  hide_likes: null;
  feed_account_info: FeedAccountInfo;
  status: number;
}

export interface FeedAccountInfo {
  is_kol: null;
  can_post_feed: boolean;
}

export interface ShopCover {
  image_url: string;
  type: number;
  video_url: string;
  redirect_url: null;
  redirect_url_type: null;
}
