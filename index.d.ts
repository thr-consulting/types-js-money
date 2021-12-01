export interface Currency {
  code: string;
  decimal_digits: number;
  name: string;
  name_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
}

export type CurrencyString =
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ARS"
  | "AUD"
  | "AZN"
  | "BAM"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BND"
  | "BOB"
  | "BRL"
  | "BTC"
  | "BWP"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EEK"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "GBP"
  | "GEL"
  | "GHS"
  | "GNF"
  | "GTQ"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KHR"
  | "KMF"
  | "KRW"
  | "KWD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LTL"
  | "LVL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MOP"
  | "MUR"
  | "MXN"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SOS"
  | "SYP"
  | "THB"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "XAF"
  | "XOF"
  | "YER"
  | "ZAR"
  | "ZMK";

export type RounderFn = (x: number) => number;
export type Rounder = "round" | "floor" | "ceil";

export interface MoneyObject {
  amount: number;
  currency: CurrencyString;
}

export default class Money {
  constructor(amount: number, currency: Currency | CurrencyString);

  static fromDecimal(amount: MoneyObject, rounder?: Rounder | RounderFn): Money;
  static fromDecimal(
    amount: number,
    currency: CurrencyString | Currency,
    rounder?: Rounder | RounderFn
  ): Money;
  static fromInteger(amount: MoneyObject): Money;
  static fromInteger(
    amount: number,
    currency: CurrencyString | Currency
  ): Money;

  add(other: Money): Money;
  subtract(other: Money): Money;
  multiply(multiplier: number, rounder?: RounderFn): Money;
  divide(divisor: number, rounder?: RounderFn): Money;

  equals(other: Money): boolean;
  greaterThan(other: Money): boolean;
  greaterThanOrEqual(other: Money): boolean;
  lessThan(other: Money): boolean;
  lessThanOrEqual(other: Money): boolean;

  isNegative(): boolean;
  isPositive(): boolean;
  isZero(): boolean;

  compare(other: Money): 0 | 1 | -1;

  toDecimal(): number;
  toJSON(): MoneyObject;
  toString(): string;

  allocate(ratios: number[]): Money[];

  getAmount(): number;
  getCurrency(): CurrencyString;

  readonly amount: number;
  readonly currency: CurrencyString;

  static AED: Currency;
  static AFN: Currency;
  static ALL: Currency;
  static AMD: Currency;
  static ARS: Currency;
  static AUD: Currency;
  static AZN: Currency;
  static BAM: Currency;
  static BDT: Currency;
  static BGN: Currency;
  static BHD: Currency;
  static BIF: Currency;
  static BND: Currency;
  static BOB: Currency;
  static BRL: Currency;
  static BTC: Currency;
  static BWP: Currency;
  static BYR: Currency;
  static BZD: Currency;
  static CAD: Currency;
  static CDF: Currency;
  static CHF: Currency;
  static CLP: Currency;
  static CNY: Currency;
  static COP: Currency;
  static CRC: Currency;
  static CVE: Currency;
  static CZK: Currency;
  static DJF: Currency;
  static DKK: Currency;
  static DOP: Currency;
  static DZD: Currency;
  static EEK: Currency;
  static EGP: Currency;
  static ERN: Currency;
  static ETB: Currency;
  static EUR: Currency;
  static GBP: Currency;
  static GEL: Currency;
  static GHS: Currency;
  static GNF: Currency;
  static GTQ: Currency;
  static HKD: Currency;
  static HNL: Currency;
  static HRK: Currency;
  static HUF: Currency;
  static IDR: Currency;
  static ILS: Currency;
  static INR: Currency;
  static IQD: Currency;
  static IRR: Currency;
  static ISK: Currency;
  static JMD: Currency;
  static JOD: Currency;
  static JPY: Currency;
  static KES: Currency;
  static KHR: Currency;
  static KMF: Currency;
  static KRW: Currency;
  static KWD: Currency;
  static KZT: Currency;
  static LAK: Currency;
  static LBP: Currency;
  static LKR: Currency;
  static LTL: Currency;
  static LVL: Currency;
  static LYD: Currency;
  static MAD: Currency;
  static MDL: Currency;
  static MGA: Currency;
  static MKD: Currency;
  static MMK: Currency;
  static MOP: Currency;
  static MUR: Currency;
  static MXN: Currency;
  static MYR: Currency;
  static MZN: Currency;
  static NAD: Currency;
  static NGN: Currency;
  static NIO: Currency;
  static NOK: Currency;
  static NPR: Currency;
  static NZD: Currency;
  static OMR: Currency;
  static PAB: Currency;
  static PEN: Currency;
  static PHP: Currency;
  static PKR: Currency;
  static PLN: Currency;
  static PYG: Currency;
  static QAR: Currency;
  static RON: Currency;
  static RSD: Currency;
  static RUB: Currency;
  static RWF: Currency;
  static SAR: Currency;
  static SDG: Currency;
  static SEK: Currency;
  static SGD: Currency;
  static SOS: Currency;
  static SYP: Currency;
  static THB: Currency;
  static TND: Currency;
  static TOP: Currency;
  static TRY: Currency;
  static TTD: Currency;
  static TWD: Currency;
  static TZS: Currency;
  static UAH: Currency;
  static UGX: Currency;
  static USD: Currency;
  static UYU: Currency;
  static UZS: Currency;
  static VEF: Currency;
  static VND: Currency;
  static XAF: Currency;
  static XOF: Currency;
  static YER: Currency;
  static ZAR: Currency;
  static ZMK: Currency;
}
