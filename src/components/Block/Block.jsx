import { useRef } from 'react';
import styles from "./Block.module.css"

export const Block = ({ rates, value, currency, onChangeValue, onChangeCurrency }) => {
    const selectRef = useRef({});
    const ratesKeys = Object.keys(rates);

    const selectOpen = () => {
        selectRef.current.disabled = false;
        selectRef.current.showPicker();
        selectRef.current.disabled = true;
    }

    return (
        <div className={styles.block}>
            <div className={styles.currencies}>
                <p>Валюта:</p>
                <select name="rates" onChange={(e) => onChangeCurrency(e.target.value)} ref={selectRef} disabled value={currency || "default"}>
                    <option value="default" disabled> Выберите валюту</option>
                    {
                        ratesKeys.map(rate => {
                            return <option key={rate} value={rate}>{rate}</option>
                        })
                    }
                </select>
                <div className={styles.arrow} onClick={selectOpen}>
                    <svg height="50px" viewBox="0 0 50 50" width="50px">
                        <rect fill="none" height="50" width="50" />
                        <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                    </svg>
                </div>


            </div>

            <input
                onChange={(e) => onChangeValue(e.target.value)}
                value={value}
                type="number"
                placeholder={0}
            />
        </div >)
}