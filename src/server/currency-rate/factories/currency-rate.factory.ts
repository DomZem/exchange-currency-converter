import { ICurrencyRateService } from "../interfaces/currency-rate.interface";
import { FrankfurterRateService } from "../services/frankfurter-rate.service";

export class CurrencyRateFactory {
  public createService(): ICurrencyRateService {
    return new FrankfurterRateService();
  }
}
