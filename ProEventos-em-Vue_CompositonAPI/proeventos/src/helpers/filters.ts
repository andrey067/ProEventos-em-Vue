import { Constantes } from "../utils/constants";
import moment from "moment";

const filters = {
    price(input: number) {
        if (isNaN(input)) {
            return "-";
        }
        return '$' + input.toFixed(2);
    },
    format_date(value: string) {
        if (value) {
            return moment(String(value)).format(Constantes.DATE_FMT)
        }
    },
}
export default filters;