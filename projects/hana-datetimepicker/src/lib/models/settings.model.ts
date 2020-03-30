import { ButtonNames } from './button-names.model';

export interface Settings {
    bigBanner?: boolean;
    timePicker: boolean;
    format: string;
    defaultOpen?: boolean;
    buttons: ButtonNames;
    cal_days_labels: Array<string>;
    cal_full_days_lables: Array<string>;
    cal_months_labels: Array<string>;
    cal_months_labels_short: Array<string>;
    closeOnSelect?: boolean;
    rangepicker?: boolean;
}
