const prompt = require("prompt-sync")({ sigint: true });

const basicSalary = parseFloat(prompt("Enter basic   Salary: "));

function kratax(basicSalary, benefits = 0) {
    let nssf = 0;
    let nhif = 0;

    function calculateNHIFDeduction(basicSalary) {
        let nhifDeduction = 0;
        if (basicSalary > 0 && basicSalary <= 5999) {
            nhifDeduction = 150;
        } else if (basicSalary >= 6000 && basicSalary <= 7999) {
            nhifDeduction = 300;
        } // add more conditions...
        return nhifDeduction;
    }

    function calculateTax(payeableIncome) {
        let paye = 0;
        let grossTax = 0;
        let rated = 0;
        let personalRelief = 2400;
        if (payeableIncome > 0 && payeableIncome <= 24000) {
            grossTax = payeableIncome * 0.10;
        } // add more conditions...
        paye = Math.floor(grossTax - personalRelief);
        let netsalary = payeableIncome - paye;
        return { paye, netsalary };
    }

    let nhifDeduction = calculateNHIFDeduction(basicSalary);
    let nssfDeduction = benefits > 0 ? benefits : basicSalary * 0.06;
    nhif = nhifDeduction;
    let taxableIncome = basicSalary - (nssfDeduction + nhif);
    let taxed = calculateTax(taxableIncome);

    return {
        NSSFDeductions: nssfDeduction,
        NHIFDeductions: nhif,
        payee: taxed.paye,
        grosssalary: basicSalary,
        netsalary: taxed.netsalary
    };
}

console.log(kratax(basicSalary));