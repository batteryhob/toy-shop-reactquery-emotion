/**
 * 원 단위 콤마
 */
 export function addComma(won: number) {
    return won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}