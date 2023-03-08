import BitcoinSV from './assets/Bitcoin SV (BSV).svg';
import Binance from './assets/Binance Coin (BNB).svg';
import Ethereum from './assets/Ethereum (ETH).svg';
import SHIBA from './assets/SHIBA INU (SHIB).svg';
import Solana from './assets/Solana (SOL).svg';

export const data = [
    {
        "icon": BitcoinSV,
        "name": "Bitcoin (BTC)",
        "price": "$31,812.80",
        "type": "profit",
        "percentage": "+10%",
        "tvl": "$60,000",
        "popularPair": [
            Solana, Ethereum, Binance
        ]
    },
    {
        "icon": Solana,
        "name": "Solana (SOL)",
        "price": "$32.83",
        "type": "loss",
        "percentage": "-12.32%",
        "tvl": "$60,000",
        "popularPair": [
            BitcoinSV, Ethereum, Binance
        ]
    },
    {
        "icon": Ethereum,
        "name": "Ethereum (ETH)",
        "price": "$1,466.45",
        "type": "loss",
        "percentage": "-11.93%",
        "tvl": "$60,000",
        "popularPair": [
            Solana, BitcoinSV, Binance
        ]
    },
    {
        "icon": Binance,
        "name": "Binance USD (BUSD)",
        "price": "$1.00",
        "type": "profit",
        "percentage": "+0.26%",
        "tvl": "$60,000",
        "popularPair": [
            Solana, Ethereum, BitcoinSV
        ]
    },
    {
        "icon": SHIBA,
        "name": "Shiba Inu (SHIB)",
        "price": "$0.00000001948",
        "type": "loss",
        "percentage": "-8.1%",
        "tvl": "$60,000",
        "popularPair": [
            Solana, Ethereum, BitcoinSV
        ]
    }
]