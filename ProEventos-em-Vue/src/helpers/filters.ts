import { Constantes } from "../utils/constants";
import moment from "moment";

const filters = {
    price(input: number) {
        if (isNaN(input)) {
            return "-";
        }
        return '$' + input.toFixed(2);
    },
    format_date(value: Date) {
        if (value) {
            return moment(new Date(value)).format(Constantes.DATE_FMT)
        }
    },
}
export default filters;