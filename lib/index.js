'use strict';

function UCC(cn) {

    if (!(this instanceof UCC)) {
        return new UCC(cn);
    }

    if (!cn || (typeof cn !== 'object' || typeof cn !== 'string')) {
        throw new TypeError("Invalid connection parameters.");
    }
}
