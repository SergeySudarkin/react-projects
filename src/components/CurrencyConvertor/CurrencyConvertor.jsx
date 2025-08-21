import { useEffect, useRef, useState } from 'react';
import styles from "./CurrencyConvertor.module.css"
import { Block } from '../Block/Block';

// API конвертер валют: https://open.er-api.com/v6/latest/RUB

export const CurrencyConvertor = () => {
    const [fromPrice, setFromPrice] = useState(1);
    const [toPrice, setToPrice] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("RUB");

    const ratesRef = useRef({});

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
                const data = await response.json();
                ratesRef.current = data.rates;
                onChangeFromPrice(fromPrice);
            } catch (error) {
                console.warn(error.message);
            }
        }
        getRates();
    }, [])

    const onChangeFromPrice = (price) => {
        setFromPrice(price);
        if (!isNaN(price) && ratesRef.current[fromCurrency] && ratesRef.current[toCurrency]) {
            const result = price / ratesRef.current[fromCurrency] * ratesRef.current[toCurrency];
            setToPrice(result.toFixed(3));
        }

    }
    const onChangeToPrice = (price) => {
        setToPrice(price);
        if (!isNaN(price) && ratesRef.current[fromCurrency] && ratesRef.current[toCurrency]) {
            const result = ratesRef.current[fromCurrency] / ratesRef.current[toCurrency] * price;
            setFromPrice(result.toFixed(3));
        }
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency, toCurrency])

    const swapHandler = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    return (
        <section className={styles.AppCurrencyConvertor}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Block rates={ratesRef.current} value={fromPrice} currency={fromCurrency} onChangeValue={onChangeFromPrice} onChangeCurrency={setFromCurrency} />
                    <button className={styles.swap} onClick={swapHandler}>SWAP</button>
                    <Block rates={ratesRef.current} value={toPrice} currency={toCurrency} onChangeValue={onChangeToPrice} onChangeCurrency={setToCurrency} />
                    <p className={styles.descRates}>1 {fromCurrency} = {(ratesRef.current[toCurrency] / ratesRef.current[fromCurrency]).toFixed(3)} {toCurrency}</p>
                </div>
            </div>
        </section>
    );
};
