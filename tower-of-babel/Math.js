'use strict';

export const PI = PI = 3.141592;

function _sqrt(s, x, last) {
    if (x == last) {
        return x;
    }
    return _sqrt(s, (x + s / x) / 2.0, x);
}

export function sqrt(s) {
    return _sqrt(s, s / 2.0, 0.0);
}

export function square(x) {
    return x * x;
}
