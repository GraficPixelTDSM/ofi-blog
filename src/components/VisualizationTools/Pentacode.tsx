import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { toBlob, toPng } from 'html-to-image';
import * as React from 'react';
import styles from './Pentacode.module.scss';

/**
 * @url: https://rothe.io/crypto/teaching/2-modern/2-1-Kryptologie-Blockchiffre.pdf
 */


export const sanitizePentaString = (text: string) => {
    return text.toUpperCase().replace(/\s/g, ' ').replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g, '')
}

export const PENTA_TABLE = {
    [' ']: '00000',
    A: '00001',
    B: '00010',
    C: '00011',
    D: '00100',
    E: '00101',
    F: '00110',
    G: '00111',
    H: '01000',
    I: '01001',
    J: '01010',
    K: '01011',
    L: '01100',
    M: '01101',
    N: '01110',
    O: '01111',
    P: '10000',
    Q: '10001',
    R: '10010',
    S: '10011',
    T: '10100',
    U: '10101',
    V: '10110',
    W: '10111',
    X: '11000',
    Y: '11001',
    Z: '11010',
    [',']: '11011',
    ['-']: '11100',
    ['.']: '11101',
    ['?']: '11110',
    ['@']: '11111',
    ['00000']: ' ',
    ['00001']: 'A',
    ['00010']: 'B',
    ['00011']: 'C',
    ['00100']: 'D',
    ['00101']: 'E',
    ['00110']: 'F',
    ['00111']: 'G',
    ['01000']: 'H',
    ['01001']: 'I',
    ['01010']: 'J',
    ['01011']: 'K',
    ['01100']: 'L',
    ['01101']: 'M',
    ['01110']: 'N',
    ['01111']: 'O',
    ['10000']: 'P',
    ['10001']: 'Q',
    ['10010']: 'R',
    ['10011']: 'S',
    ['10100']: 'T',
    ['10101']: 'U',
    ['10110']: 'V',
    ['10111']: 'W',
    ['11000']: 'X',
    ['11001']: 'Y',
    ['11010']: 'Z',
    ['11011']: ',',
    ['11100']: '-',
    ['11101']: '.',
    ['11110']: '?',
    ['11111']: '@',
};

const deepCopy = (arr: number[][]): number[][] => {
    const copy = [];
    arr.forEach((row) => {
        const newRow = [];
        copy.push(newRow);
        row.forEach((cell) => {
            newRow.push(cell);
        });
    });
    return copy;
};

const toPenta = (text: string): string[] => {
    return text
        .toUpperCase()
        .split('')
        .map((char) => PENTA_TABLE[char] || char);
};

const pentaChunks = (pentaText: string, appendIncompleteParts: boolean = true): string[] => {
    const chunks: string[] = [];
    let sanitized = pentaText.replace(/\s/g, '');
    while (sanitized.length > 0) {
        if (sanitized.length < 5 && !appendIncompleteParts) {
            break;
        }
        chunks.push(sanitized.slice(0, 5));
        sanitized = sanitized.slice(5);
    }
    return chunks;
};

const toText = (penta: string): string[] => {
    return pentaChunks(penta).map((seq) => PENTA_TABLE[seq] || seq);
};

const TextEditor = () => {
    const [text, setText] = React.useState('');
    const [penta, setPenta] = React.useState('');
    const [source, setSource] = React.useState('');

    React.useEffect(() => {
        // prevent trigger-circle, when source was updated from penta
        if (source === 'penta') {
            setSource('');
            return;
        }
        setSource('text');
        setPenta(toPenta(text).join(' '));
    }, [text]);

    React.useEffect(() => {
        // prevent trigger-circle, when source was updated from text
        if (source === 'text') {
            setSource('');
            return;
        }
        setSource('penta');
        setText(toText(penta).join(''));
    }, [penta]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Pentacode</p>
                <h4>Klartext</h4>
                <textarea
                    placeholder="Klartext eingeben"
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => setText(e.target.value.toUpperCase())}
                    rows={5}
                ></textarea>
                <h4>Pentacode</h4>
                <textarea
                    placeholder="Binären Pentacode eingeben"
                    className={clsx(styles.input)}
                    value={penta}
                    onChange={(e) => setPenta(e.target.value.replace(/[^01\s]/g, ''))}
                    rows={5}
                ></textarea>
            </div>
        </div>
    );
};

const PixelEditor = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [showCopied, setShowCopied] = React.useState(false);
    const [penta, setPenta] = React.useState('00000 00000 00000 00000 00000');
    const [pentaCells, setPentaCells] = React.useState([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]);
    const [source, setSource] = React.useState('');

    React.useEffect(() => {
        // prevent trigger-circle, when source was updated from cell
        if (source === 'cell') {
            setSource('');
            return;
        }
        setSource('editor');
        setPentaCells(
            pentaChunks(penta, false).map((row) => row.split('').map((v) => Number.parseInt(v, 2)))
        );
    }, [penta]);

    React.useEffect(() => {
        // prevent trigger-circle, when source was updated from editor
        if (source === 'editor') {
            setSource('');
            return;
        }
        setSource('cell');
        setPenta(pentaCells.map((row) => row.join('')).join(' '));
    }, [pentaCells]);


    React.useEffect(() => {
        if (!showCopied) {
            return;
        }
        const timeoutId = setTimeout(() => setShowCopied(false), 2000);
        return () => clearTimeout(timeoutId);
    }, [showCopied]);

    const onCopy = React.useCallback(() => {
        if (ref.current === null) {
            return;
        }
        console.log('new refs');
        toBlob(ref.current, { backgroundColor: 'white', canvasWidth:  5 * 10, canvasHeight: pentaCells.length * 10})
            .then((blob) => {
                return navigator.clipboard.write([
                    new ClipboardItem({
                        ['image/png']: blob as unknown as Promise<Blob>,
                    }),
                ]);
            })
            .then(() => {
                setShowCopied(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Pixel-Editor</p>
                <div className={styles.interactive}>
                    <div className={clsx(styles.pixelEditor)}>
                        <div ref={ref}>
                            {pentaCells.map((row, rowIdx) => {
                                return (
                                    <div className={clsx(styles.row)} key={rowIdx}>
                                        {row.map((cell, idx) => {
                                            return (
                                                <span
                                                    className={clsx(
                                                        styles.cell,
                                                        cell === 0 ? styles.off : styles.on
                                                    )}
                                                    key={idx}
                                                    onClick={() => {
                                                        const newCells = deepCopy(pentaCells);
                                                        newCells[rowIdx][idx] = 1 - newCells[rowIdx][idx];
                                                        setPentaCells(newCells);
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.actions}>
                            <button
                                className="button button--outline button--secondary button--sm"
                                onClick={() => setPentaCells([...pentaCells, [0, 0, 0, 0, 0]])}
                            >
                                +
                            </button>
                            <button
                                className="button button--outline button--secondary button--sm"
                                onClick={() => setPentaCells([...pentaCells.slice(0, -1)])}
                            >
                                －
                            </button>

                            <button
                                className={clsx('button', 'button--outline', 'button--sm', showCopied ? 'button--success' : 'button--primary', styles.copy)}
                                onClick={onCopy}
                            >
                                {showCopied ? (
                                    <FontAwesomeIcon icon={faClipboardCheck}/>
                                ) : (
                                    <FontAwesomeIcon icon={faClipboard}/>
                                )}
                            </button>
                        </div>
                    </div>

                    <textarea
                        placeholder="Binären Pentacode eingeben"
                        className={clsx(styles.input)}
                        value={penta}
                        onChange={(e) => setPenta(e.target.value.replace(/[^01\s]/g, ''))}
                        rows={pentaCells.length}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export { PixelEditor, TextEditor };
