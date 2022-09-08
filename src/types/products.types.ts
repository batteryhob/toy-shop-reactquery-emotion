export interface productItemType {
    [key : string]: string | number | boolean | undefined
    item_no: number,
    item_name: string,
    detail_image_url: string,
    price: number,
    score: number,
    availableCoupon?: boolean
}