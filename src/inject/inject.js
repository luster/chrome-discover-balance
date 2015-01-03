/*
 * Ethan Lusterman
 * Created on Saturday January 3, 2015
 * 
 */

function showUpdatedBalance() {
	var updatedBalance;
	var availableCredit;
	var creditLimit;

	//TODO: take pending payments into account

	creditLimit = Number($('#achome > div.achome-content > section:nth-child(1) > div > div.card-balances > ul:nth-child(1) > li:nth-child(3) > strong:nth-child(3)').html().replace(/[^0-9\.]+/g,""));
	availableCredit = Number($('#achome > div.achome-content > section:nth-child(1) > div > div.card-balances > ul:nth-child(1) > li:nth-child(3) > strong:nth-child(2)').html().replace(/[^0-9\.]+/g,""));

	updatedBalance = creditLimit - availableCredit;
	updatedBalance = '$' + updatedBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

	$('#greeting').append('<br><span style="padding-top:0.3em;font-weight:bold;">'+updatedBalance+'</span>');
	return;
}

showUpdatedBalance();
