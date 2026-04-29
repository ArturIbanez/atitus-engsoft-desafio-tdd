export function calcularDesconto(voucher, valorTotal) {
    const descontos = {
        'DEZ': 0.10,
        'NATAL10': 0.10,
        'TRINTA': 0.30
    };

    const percentual = descontos[voucher] || 0;
    
    return valorTotal * percentual;
}