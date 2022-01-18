export type IData = {
  errors?: any
  get?: any
  parameters?: any
  response?: any
  results?: any
}

export type ICoinsData = {
  '24hVolume': string
  btcPrice: string
  change: string
  coinrankingUrl: string
  color: string
  iconUrl: string
  listedAt: number
  lowVolume: boolean
  marketCap: string
  name: string
  price: string
  rank: number
  sparkline: string[]
  symbol: string
  tier: number
  uuid: string
}

export type ICoinData = ICoinsData & {
  allTimeHigh: {
    price: string
    timestamp: number
  }
  description: string
  links: {
    name: string
    type: string
    url: string
  }[]
  numberOfExchanges: number
  numberOfMarkets: number
  supply: {
    confirmed: boolean
    total: string
    circulating: string
  }
  websiteUrl: string
}

export type ICoinPriceHistoryData = {
  price: string
  timestamp: number
}

export type ITimePeriod =
  | '3h'
  | '24h'
  | '7d'
  | '30d'
  | '3m'
  | '1y'
  | '3y'
  | '5y'

export type INewsData = {
  articleImage: string
  articleTitle: string
  articleUrl: string
  articleDate: string
}

export type INFTData = {
  place: string
  name: string
  collection: string
  date: string
  price: string
  link: string
}

export type INFTAssetData = {
  id: number
  token_id: string
  num_sales: number
  background_color: any
  image_url: string
  image_preview_url: string
  image_thumbnail_url: string
  image_original_url: string
  animation_url: any
  animation_original_url: any
  name: any
  description: any
  external_link: any
  asset_contract: {
    address: string
    asset_contract_type: string
    created_date: string
    name: string
    nft_version: string
    opensea_version: any
    owner: number
    schema_name: string
    symbol: string
    total_supply: string
    description: string
    external_link: string
    image_url: string
    default_to_fiat: boolean
    dev_buyer_fee_basis_points: number
    dev_seller_fee_basis_points: number
    only_proxied_transfers: boolean
    opensea_buyer_fee_basis_points: number
    opensea_seller_fee_basis_points: number
    buyer_fee_basis_points: number
    seller_fee_basis_points: number
    payout_address: string
  }
  permalink: string
  traits: {
    trait_type: string
    value: string
    display_type: any
    max_value: any
    trait_count: number
    order: any
  }[]
  collection: {
    payment_tokens: {
      id: number
      symbol: string
      address: string
      image_url: string
      name: string
      decimals: number
      eth_price: number
      usd_price: number
    }[]
    primary_asset_contracts: {
      address: string
      asset_contract_type: string
      created_date: string
      name: string
      nft_version: string
      opensea_version: any
      owner: number
      schema_name: string
      symbol: string
      total_supply: string
      description: string
      image_url: string
      default_to_fiat: boolean
      dev_buyer_fee_basis_points: number
      dev_seller_fee_basis_points: number
      only_proxied_transfers: boolean
      opensea_buyer_fee_basis_points: number
      opensea_seller_fee_basis_points: number
      buyer_fee_basis_points: number
      seller_fee_basis_points: number
      payout_address: string
    }[]
    traits: any
    stats: {
      one_day_volume: number
      one_day_change: number
      one_day_sales: number
      one_day_average_price: number
      seven_day_volume: number
      seven_day_change: number
      seven_day_sales: number
      seven_day_average_price: number
      thirty_day_volume: number
      thirty_day_change: number
      thirty_day_sales: number
      thirty_day_average_price: number
      total_volume: number
      total_sales: number
      total_supply: number
      count: number
      num_owners: number
      average_price: number
      num_reports: number
      market_cap: number
      floor_price: number
    }
    banner_image_url: string
    chat_url: any
    created_date: string
    default_to_fiat: boolean
    description: string
    dev_buyer_fee_basis_points: string
    dev_seller_fee_basis_points: string
    discord_url: string
    display_data: {
      card_display_style: string
    }
    external_url: string
    featured: boolean
    featured_image_url: string
    hidden: boolean
    safelist_request_status: string
    image_url: string
    is_subject_to_whitelist: boolean
    large_image_url: string
    medium_username: any
    name: string
    only_proxied_transfers: boolean
    opensea_buyer_fee_basis_points: string
    opensea_seller_fee_basis_points: string
    payout_address: string
    require_email: boolean
    short_description: any
    slug: string
    telegram_url: any
    twitter_username: string
    instagram_username: string
    wiki_url: any
  }
  [key: string]: any
}
