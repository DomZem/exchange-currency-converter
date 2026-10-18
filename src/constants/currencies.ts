export const CURRENCIES: Record<
  string,
  {
    name: string;
    iconSrc: string;
    isPopular?: boolean;
  }
> = {
  USD: {
    name: "US Dollar",
    iconSrc: "/flags/us.svg",
    isPopular: true,
  },
  AED: {
    name: "United Arab Emirates Dirham",
    iconSrc: "/flags/ae.svg",
  },
  ARS: {
    name: "Argentine Peso",
    iconSrc: "/flags/ar.svg",
  },
  AUD: {
    name: "Australian Dollar",
    iconSrc: "/flags/au.svg",
  },
  BDT: {
    name: "Bangladeshi Taka",
    iconSrc: "/flags/bd.svg",
  },
  BGN: {
    name: "Bulgarian Lev",
    iconSrc: "/flags/bg.svg",
  },
  BHD: {
    name: "Bahraini Dinar",
    iconSrc: "/flags/bh.svg",
  },
  BRL: {
    name: "Brazilian Real",
    iconSrc: "/flags/br.svg",
  },
  CAD: {
    name: "Canadian Dollar",
    iconSrc: "/flags/ca.svg",
  },
  CHF: {
    name: "Swiss Franc",
    iconSrc: "/flags/ch.svg",
  },
  CLP: {
    name: "Chilean Peso",
    iconSrc: "/flags/cl.svg",
  },
  CNY: {
    name: "Chinese Yuan",
    iconSrc: "/flags/cn.svg",
  },
  COP: {
    name: "Colombian Peso",
    iconSrc: "/flags/co.svg",
  },
  EUR: {
    name: "Euro",
    iconSrc: "/flags/eu.svg",
    isPopular: true,
  },
  CZK: {
    name: "Czech Koruna",
    iconSrc: "/flags/cz.svg",
  },
  DKK: {
    name: "Danish Krone",
    iconSrc: "/flags/dk.svg",
  },
  EGP: {
    name: "Egyptian Pound",
    iconSrc: "/flags/eg.svg",
  },
  GBP: {
    name: "British Pound",
    iconSrc: "/flags/gb.svg",
    isPopular: true,
  },
  HKD: {
    name: "Hong Kong Dollar",
    iconSrc: "/flags/hk.svg",
  },
  HNL: {
    name: "Honduran Lempira",
    iconSrc: "/flags/hn.svg",
  },
  HRK: {
    name: "Croatian Kuna",
    iconSrc: "/flags/hr.svg",
  },
  HTG: {
    name: "Haitian Gourde",
    iconSrc: "/flags/ht.svg",
  },
  HUF: {
    name: "Hungarian Forint",
    iconSrc: "/flags/hu.svg",
  },
  IDR: {
    name: "Indonesian Rupiah",
    iconSrc: "/flags/id.svg",
  },
  INR: {
    name: "Indian Rupee",
    iconSrc: "/flags/in.svg",
  },
  ISK: {
    name: "Icelandic Króna",
    iconSrc: "/flags/is.svg",
  },
  JOD: {
    name: "Jordanian Dinar",
    iconSrc: "/flags/jo.svg",
  },
  JPY: {
    name: "Japanese Yen",
    iconSrc: "/flags/jp.svg",
  },
  KES: {
    name: "Kenyan Shilling",
    iconSrc: "/flags/ke.svg",
  },
  KRW: {
    name: "South Korean Won",
    iconSrc: "/flags/kr.svg",
  },
  KWD: {
    name: "Kuwaiti Dinar",
    iconSrc: "/flags/kw.svg",
  },
  LBP: {
    name: "Lebanese Pound",
    iconSrc: "/flags/lb.svg",
  },
  XCD: {
    name: "East Caribbean Dollar",
    iconSrc: "/flags/lc.svg",
  },
  LKR: {
    name: "Sri Lankan Rupee",
    iconSrc: "/flags/lk.svg",
  },
  MAD: {
    name: "Moroccan Dirham",
    iconSrc: "/flags/ma.svg",
  },
  MXN: {
    name: "Mexican Peso",
    iconSrc: "/flags/mx.svg",
  },
  MYR: {
    name: "Malaysian Ringgit",
    iconSrc: "/flags/my.svg",
  },
  NGN: {
    name: "Nigerian Naira",
    iconSrc: "/flags/ng.svg",
  },
  NOK: {
    name: "Norwegian Krone",
    iconSrc: "/flags/no.svg",
  },
  NPR: {
    name: "Nepalese Rupee",
    iconSrc: "/flags/np.svg",
  },
  NZD: {
    name: "New Zealand Dollar",
    iconSrc: "/flags/nz.svg",
  },
  OMR: {
    name: "Omani Rial",
    iconSrc: "/flags/om.svg",
  },
  PEN: {
    name: "Peruvian Sol",
    iconSrc: "/flags/pe.svg",
  },
  PHP: {
    name: "Philippine Peso",
    iconSrc: "/flags/ph.svg",
  },
  PKR: {
    name: "Pakistani Rupee",
    iconSrc: "/flags/pk.svg",
  },
  PLN: {
    name: "Polish Złoty",
    iconSrc: "/flags/pl.svg",
  },
  QAR: {
    name: "Qatari Riyal",
    iconSrc: "/flags/qa.svg",
  },
  RON: {
    name: "Romanian Leu",
    iconSrc: "/flags/ro.svg",
  },
  RUB: {
    name: "Russian Ruble",
    iconSrc: "/flags/ru.svg",
  },
  SAR: {
    name: "Saudi Riyal",
    iconSrc: "/flags/sa.svg",
  },
  SEK: {
    name: "Swedish Krona",
    iconSrc: "/flags/se.svg",
  },
  SGD: {
    name: "Singapore Dollar",
    iconSrc: "/flags/sg.svg",
  },
  THB: {
    name: "Thai Baht",
    iconSrc: "/flags/th.svg",
  },
  TRY: {
    name: "Turkish Lira",
    iconSrc: "/flags/tr.svg",
  },
  TWD: {
    name: "Taiwan Dollar",
    iconSrc: "/flags/tw.svg",
  },
  UAH: {
    name: "Ukrainian Hryvnia",
    iconSrc: "/flags/ua.svg",
  },
  VND: {
    name: "Vietnamese Dong",
    iconSrc: "/flags/vn.svg",
  },
  ZAR: {
    name: "South African Rand",
    iconSrc: "/flags/za.svg",
  },
} as const;
