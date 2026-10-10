import { ICurrencyRate } from '../interfaces/currency-rate.interface';
import { FrankfurterRateService } from '../services/frankfurter-rate.service';

export class CurrencyRateFactory {
	public createService(): ICurrencyRate {
		return new FrankfurterRateService();
	}
}
