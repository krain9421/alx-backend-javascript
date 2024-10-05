function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({data: 'Successful response from the API' });
        }
        // If success is false, the function does nothing
    });
}

module.exports = getPaymentTokenFromAPI;
