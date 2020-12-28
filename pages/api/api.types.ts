export type Category = {
  id: number,
  name: string,
  slug: string,
  parent?: number,
  description?: string,
  display?: string,
  image?: string[],
  menu_order?: number,
  count?: number,
  _links?: {
    self?: [
        {
          href: string,
        }
      ],
      collection: [
        {
          href: string,
        }
      ],
      up: [
        {
          href: string
        }
    ]
  }
}

export type Attribute = {
  id: number,
  name: string,
  position: number,
  visible: boolean,
  variation: boolean,
  options: string[],
}

export type Product = {
  id: number,
  name: string,
  slug: string,
  permalink: string,
  date_created: string,
  date_created_gmt: string,
  date_modified: string,
  date_modified_gmt: string,
  type: string,
  status: string,
  featured: boolean,
  catalog_visibility: string,
  description: string,
  sku: string,
  price: number,
  regular_price: number,
  sale_price: number,
  date_on_sale_from?: string,
  date_on_sale_from_gmt?: string,
  date_on_sale_to?: string,
  date_on_sale_to_gmt?: string,
  price_html: string,
  on_sale: boolean,
  purchasable: boolean,
  total_sales: number,
  virtual: boolean,
  downloadable: boolean,
  downloads?: string [],
  download_limit: number,
  download_expiry: number,
  external_url?: string,
  button_text?: string,
  tax_status?: string,
  tax_class?: string,
  manage_stock: false,
  stock_quantity?: number,
  stock_status: string,
  backorders: string,
  backorders_allowed: false,
  backordered: false,
  sold_individually: false,
  weight?: number,
  dimensions?: {
    length: string,
    width: string,
    height: string,
  },
  shipping_required?: true,
  shipping_taxable?: true,
  shipping_class?: string,
  shipping_class_id: 0,
  reviews_allowed: true,
  average_rating: 0.00,
  rating_count: 0,
  related_ids?: number[],
  upsell_ids?: [],
  cross_sell_ids?: number[],
  parent_id: number,
  purchase_note: string,
  categories: Category[],
  tags: [],
  images: [],
  attributes: Attribute[],
}